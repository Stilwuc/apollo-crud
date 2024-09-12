import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationRequest,
    PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationResponse,
    PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyid";

/**
 * @link /v2/admin/merchants/:id/withdrawal-policies/:policyId
 */
export async function patchV2AdminMerchantsIdWithdrawalPoliciesPolicyid(
    id: PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams["id"],
    policyId: PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams["policyId"],
    data?: PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationResponse,
        PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/merchants/${id}/withdrawal-policies/${policyId}`,
        data,
        ...options,
    });
    return res.data;
}
