import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationResponse,
    DeleteV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminMerchantsIdWithdrawalPoliciesPolicyid";

/**
 * @link /v2/admin/merchants/:id/withdrawal-policies/:policyId
 */
export async function deleteV2AdminMerchantsIdWithdrawalPoliciesPolicyid(
    id: DeleteV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams["id"],
    policyId: DeleteV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationResponse>(
            {
                method: "delete",
                url: `/v2/admin/merchants/${id}/withdrawal-policies/${policyId}`,
                ...options,
            }
        );
    return res.data;
}
