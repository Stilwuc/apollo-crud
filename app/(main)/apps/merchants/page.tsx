"use client";

import { types } from "@/openapi";
import { administrationEndpointsService } from "@/openapi/requests";
import { useMutation, useQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { SortOrder } from "primereact/api";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable, DataTableStateEvent } from "primereact/datatable";
import { FC, useState } from "react";
import {
    DEFAULT_PAGE_SIZE,
    getMerchants,
} from "@/app/(main)/apps/merchants/_components/api";
import { Toolbar } from "primereact/toolbar";
import { renderModal } from "@/lib/renderModal";
import { MerchantManageModal } from "@/app/(main)/apps/merchants/_components/MerchantManageModal";
import { globalToast } from "@/layout/layout";
import { deleteV2AdminMerchantsId } from "@/openapi/requests/administrationEndpoints";
import { InputText } from "primereact/inputtext";
import { debounce, get } from "lodash";
import Link from "next/link";
import { AxiosError } from "axios";

export default function MerchantsTable() {
    // @TODO: добавить поддержку сортировки + фильтраций по колонкам
    const [filter, setFilter] = useQueryStates({
        pageNumber: parseAsInteger.withDefault(0),
        pageSize: parseAsInteger.withDefault(DEFAULT_PAGE_SIZE),
        name: parseAsString,
    });
    const [selectedMerchants, setSelectedMerchants] = useState<
        types.MerchantAdminsDto[]
    >([]);

    const merchantPageQuery = useQuery({
        queryKey: ["/v2/admin/merchants", filter],
        queryFn: () => getMerchants(filter),
    });

    const deleteMutation = useMutation({
        mutationFn: async (ids: string[]) => {
            return Promise.all(ids.map((id) => deleteV2AdminMerchantsId(id)));
        },
        onSuccess: (response) => {
            globalToast.show({
                severity: "success",
                summary: "Success action",
                detail: "Merchants deleted",
            });
            merchantPageQuery.refetch();
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
        renderModal(MerchantManageModal, {
            onUpdate: () => {
                merchantPageQuery.refetch();
            },
        });
    };

    const openEditModal = (merchant: types.MerchantAdminsDto) => {
        renderModal(MerchantManageModal, {
            editableMerchant: merchant,
            onUpdate: () => {
                merchantPageQuery.refetch();
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
                                    selectedMerchants
                                        .map(
                                            (selectedMerchant) =>
                                                selectedMerchant.id
                                        )
                                        .filter(Boolean) as string[]
                                )
                            }
                            disabled={!selectedMerchants.length}
                        />
                    </div>
                )}
            />
            <DataTable
                lazy
                loading={merchantPageQuery.isLoading}
                className="datatable-responsive"
                dataKey="id"
                emptyMessage="No merchants found"
                value={merchantPageQuery?.data?.items}
                selection={selectedMerchants}
                selectionMode="checkbox"
                onSelectionChange={(selectionData) =>
                    setSelectedMerchants(selectionData.value)
                }
                header={
                    <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                        <h5 className="m-0">Manage merchants</h5>
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
                        pageSize: paginationData.rows,
                    })
                }
                paginator
                totalRecords={merchantPageQuery.data?.totalCount}
                first={
                    (merchantPageQuery.data?.totalCount ?? 0) *
                    filter.pageNumber
                }
                rows={DEFAULT_PAGE_SIZE}
                rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            >
                <Column
                    selectionMode="multiple"
                    headerStyle={{ width: "4rem" }}
                />
                <Column
                    field="id"
                    header="Id"
                    body={(item: types.MerchantAdminsDto) => (
                        <div className="w-5rem white-space-nowrap overflow-hidden text-overflow-ellipsis">
                            {item.id}
                        </div>
                    )}
                />
                <Column
                    field="name"
                    header="Name"
                    body={(item: types.MerchantAdminsDto) => (
                        <Link href={`/apps/merchants/${item.id}`}>
                            {item.name}
                        </Link>
                    )}
                    headerStyle={{ minWidth: "15rem" }}
                />
                <Column field="balance" header="Balance" />
                <Column field="isEnabled" header="Enabled" />
                <Column field="isDeleted" header="Deleted" />
                <Column
                    field="createdAt"
                    header="Created"
                    body={(item: types.MerchantAdminsDto) => {
                        return (
                            <>
                                {item.createdAt &&
                                    format(parseISO(item.createdAt), "Pp")}
                            </>
                        );
                    }}
                    headerStyle={{ minWidth: "170px" }}
                />
                <Column
                    body={(rowData: types.MerchantAdminsDto) => (
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
}
