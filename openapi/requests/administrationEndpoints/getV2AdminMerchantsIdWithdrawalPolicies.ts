import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantsIdWithdrawalPoliciesQueryResponse,
    GetV2AdminMerchantsIdWithdrawalPoliciesPathParams,
    GetV2AdminMerchantsIdWithdrawalPoliciesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchantsIdWithdrawalPolicies";

/**
 * @link /v2/admin/merchants/:id/withdrawal-policies
 */
export async function getV2AdminMerchantsIdWithdrawalPolicies(
    id: GetV2AdminMerchantsIdWithdrawalPoliciesPathParams["id"],
    params?: GetV2AdminMerchantsIdWithdrawalPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminMerchantsIdWithdrawalPoliciesQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminMerchantsIdWithdrawalPoliciesQueryResponse>({
            method: "get",
            url: `/v2/admin/merchants/${id}/withdrawal-policies`,
            params,
            ...options,
        });
    return res.data;
}
