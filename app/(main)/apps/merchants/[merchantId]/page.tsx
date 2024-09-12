"use client";

import { Policies } from "@/app/(main)/apps/merchants/[merchantId]/_components/Policies";
import { MerchantForm } from "@/app/(main)/apps/merchants/_components/MerchantForm";
import {
    deleteV2AdminMerchantsIdDepositPoliciesPolicyid,
    deleteV2AdminMerchantsIdWithdrawalPoliciesPolicyid,
    getV2AdminMerchantsIdDepositPolicies,
    getV2AdminMerchantsIdWithdrawalPolicies,
    getV2AdminMerchantsMerchantid,
    patchV2AdminMerchantsIdDepositPoliciesPolicyid,
    patchV2AdminMerchantsIdWithdrawalPoliciesPolicyid,
    postV2AdminMerchantsIdDepositPolicies,
    postV2AdminMerchantsIdWithdrawalPolicies,
} from "@/openapi/requests/administrationEndpoints";
import { useQuery } from "@tanstack/react-query";
import { TabPanel, TabView } from "primereact/tabview";

export default function MerchantPage(props: {
    params: { merchantId: string };
}) {
    const merchantQuery = useQuery({
        queryKey: ["/v2/admin/merchants/:id", props.params.merchantId],
        queryFn: () => getV2AdminMerchantsMerchantid(props.params.merchantId),
    });

    // @TODO: loader
    if (merchantQuery.isLoading) return null;

    return (
        <div>
            <TabView>
                <TabPanel header="Overview">
                    <MerchantForm
                        readonly
                        merchant={merchantQuery.data}
                        onSubmit={merchantQuery.refetch}
                    />
                </TabPanel>
                <TabPanel header="Deposit policies">
                    <Policies
                        merchantId={props.params.merchantId}
                        type="deposit"
                        updateItem={(id, data) =>
                            patchV2AdminMerchantsIdDepositPoliciesPolicyid(
                                props.params.merchantId,
                                id,
                                data
                            )
                        }
                        createItem={(data) =>
                            postV2AdminMerchantsIdDepositPolicies(
                                props.params.merchantId,
                                data
                            )
                        }
                        removeItems={(ids) =>
                            Promise.all(
                                ids.map((id) =>
                                    deleteV2AdminMerchantsIdDepositPoliciesPolicyid(
                                        props.params.merchantId,
                                        id
                                    )
                                )
                            )
                        }
                        fetchData={(filter) =>
                            getV2AdminMerchantsIdDepositPolicies(
                                props.params.merchantId,
                                filter
                            )
                        }
                    />
                </TabPanel>
                <TabPanel header="Withdrawal policies">
                    <Policies
                        merchantId={props.params.merchantId}
                        type="withdrawal"
                        updateItem={(id, data) =>
                            patchV2AdminMerchantsIdWithdrawalPoliciesPolicyid(
                                props.params.merchantId,
                                id,
                                data
                            )
                        }
                        createItem={(data) =>
                            postV2AdminMerchantsIdWithdrawalPolicies(
                                props.params.merchantId,
                                data
                            )
                        }
                        removeItems={(ids) =>
                            Promise.all(
                                ids.map((id) =>
                                    deleteV2AdminMerchantsIdWithdrawalPoliciesPolicyid(
                                        props.params.merchantId,
                                        id
                                    )
                                )
                            )
                        }
                        fetchData={(filter) =>
                            getV2AdminMerchantsIdWithdrawalPolicies(
                                props.params.merchantId,
                                filter
                            )
                        }
                    />
                </TabPanel>
            </TabView>
        </div>
    );
}
