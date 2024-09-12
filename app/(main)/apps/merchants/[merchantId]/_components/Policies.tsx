import { PolicyManageModal } from "@/app/(main)/apps/merchants/[merchantId]/_components/PolicyManageModal";
import { DEFAULT_PAGE_SIZE } from "@/app/(main)/apps/merchants/_components/api";
import { globalToast } from "@/layout/layout";
import { renderModal } from "@/lib/renderModal";
import { types } from "@/openapi";
import { GetV2AdminMerchantsIdDepositPoliciesQueryParams } from "@/openapi/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { debounce, get } from "lodash";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable, DataTableStateEvent } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Toolbar } from "primereact/toolbar";
import { FC, useState } from "react";

export type Policy = types.MerchantDepositPolicyResponseElement &
    types.MerchantWithdrawalPolicyResponseElement;

export interface PoliciesProps {
    merchantId: string;
    type: "deposit" | "withdrawal";
    fetchData: (
        filter: Partial<GetV2AdminMerchantsIdDepositPoliciesQueryParams>
    ) => Promise<{
        items?: Policy[];
        totalCount?: number;
    }>;
    removeItems: (ids: number[]) => Promise<unknown>;
    updateItem: (id: number, data: Partial<Policy>) => Promise<unknown>;
    createItem: (data: Partial<Policy>) => Promise<unknown>;
}

export const Policies: FC<PoliciesProps> = (props) => {
    // @TODO: добавить поддержку сортировки + фильтраций по колонкам
    const [filter, setFilter] = useQueryStates({
        pageNumber: parseAsInteger.withDefault(1),
        pageSize: parseAsInteger.withDefault(DEFAULT_PAGE_SIZE),
        name: parseAsString,
    });
    const [selectedPolices, setSelectedPolices] = useState<Policy[]>([]);

    const policyPageQuery = useQuery({
        queryKey: [
            "/v2/admin/merchants",
            props.merchantId,
            "/policies",
            props.type,
        ],
        queryFn: () => props.fetchData(filter),
    });

    const deleteMutation = useMutation({
        mutationFn: props.removeItems,
        onSuccess: (response) => {
            globalToast.show({
                severity: "success",
                summary: "Success action",
                detail: "Policies deleted",
            });
            policyPageQuery.refetch();
        },
        onError: (err: AxiosError) => {
            globalToast.show({
                severity: "error",
                summary: "Failed action",
                detail: get(err.response, "data.detail", "Server error"),
            });
        },
    });

    const openCreateModal = () => {
        renderModal(PolicyManageModal, {
            merchantId: props.merchantId,
            createItem: props.createItem,
            updateItem: props.updateItem,
            onUpdate: () => {
                policyPageQuery.refetch();
            },
        });
    };

    const openEditModal = (policy: Policy) => {
        renderModal(PolicyManageModal, {
            merchantId: props.merchantId,
            createItem: props.createItem,
            updateItem: props.updateItem,
            editablePolicy: policy,
            onUpdate: () => {
                policyPageQuery.refetch();
            },
        });
    };

    return (
        <div className="card">
            <Toolbar
                className="mb-4"
                start={() => (
                    <div className="my-2">
                        <Button
                            label="New"
                            icon="pi pi-plus"
                            severity="success"
                            className="mr-2"
                            onClick={openCreateModal}
                        />
                        <Button
                            label="Delete"
                            icon="pi pi-trash"
                            severity="danger"
                            onClick={() =>
                                deleteMutation.mutate(
                                    selectedPolices
                                        .map(
                                            (selectedMerchant) =>
                                                selectedMerchant.id
                                        )
                                        .filter(Boolean) as number[]
                                )
                            }
                            disabled={!selectedPolices.length}
                        />
                    </div>
                )}
            />
            <DataTable
                lazy
                loading={policyPageQuery.isLoading}
                className="datatable-responsive"
                dataKey="id"
                emptyMessage="No policies found"
                value={policyPageQuery?.data?.items}
                selection={selectedPolices}
                selectionMode="checkbox"
                onSelectionChange={(selectionData) =>
                    setSelectedPolices(selectionData.value)
                }
                header={
                    <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                        <h5 className="m-0">Manage policies</h5>
                        <span className="block mt-2 md:mt-0 p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText
                                type="search"
                                onInput={debounce(
                                    (event) =>
                                        setFilter({
                                            name: (
                                                event.target as HTMLInputElement
                                            ).value,
                                        }),
                                    300
                                )}
                                placeholder="Search..."
                            />
                        </span>
                    </div>
                }
                onPage={(paginationData: DataTableStateEvent) =>
                    setFilter({
                        pageNumber: paginationData.page,
                    })
                }
                paginator
                totalRecords={policyPageQuery.data?.totalCount}
                first={
                    (policyPageQuery.data?.totalCount ?? 0) * filter.pageNumber
                }
                rows={DEFAULT_PAGE_SIZE}
                rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            >
                <Column
                    selectionMode="multiple"
                    headerStyle={{ width: "4rem" }}
                />
                <Column field="id" header="Id" />
                <Column field="honeyMoneyRate" header="honeyMoneyRate" />
                <Column field="maxAmount" header="maxAmount" />
                <Column
                    field="trafficCascade"
                    header="trafficCascade"
                    body={(rowData: Policy) => rowData.trafficCascade?.name}
                />
                <Column
                    field="trafficThread"
                    header="trafficThread"
                    body={(rowData: Policy) => rowData.trafficThread?.name}
                />
                <Column
                    field="currency"
                    header="currency"
                    body={(rowData: Policy) => rowData.currency?.name}
                />
                <Column field="minAmount" header="minAmount" />
                <Column field="minAmount" header="minAmount" />
                <Column field="minProfitRate" header="minProfitRate" />
                <Column
                    body={(rowData: Policy) => (
                        <>
                            {/* @TODO: маскировать кнопку во время реквеста */}
                            <Button
                                icon="pi pi-pencil"
                                className="mr-2"
                                rounded
                                severity="success"
                                onClick={() => openEditModal(rowData)}
                            />
                            {/* @TODO: маскировать кнопку во время реквеста */}
                            <Button
                                icon="pi pi-trash"
                                rounded
                                severity="warning"
                                onClick={() =>
                                    rowData.id &&
                                    deleteMutation.mutate([rowData.id])
                                }
                            />
                        </>
                    )}
                    headerStyle={{ minWidth: "10rem" }}
                ></Column>
            </DataTable>
        </div>
    );
};
