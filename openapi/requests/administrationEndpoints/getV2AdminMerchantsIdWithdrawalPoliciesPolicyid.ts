import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantsIdWithdrawalPoliciesPolicyidQueryResponse,
    GetV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchantsIdWithdrawalPoliciesPolicyid";

/**
 * @link /v2/admin/merchants/:id/withdrawal-policies/:policyId
 */
export async function getV2AdminMerchantsIdWithdrawalPoliciesPolicyid(
    id: GetV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams["id"],
    policyId: GetV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminMerchantsIdWithdrawalPoliciesPolicyidQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminMerchantsIdWithdrawalPoliciesPolicyidQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/merchants/${id}/withdrawal-policies/${policyId}`,
                ...options,
            }
        );
    return res.data;
}
