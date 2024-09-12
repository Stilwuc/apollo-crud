import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminMerchantsIdDepositPoliciesPolicyidMutationRequest,
    PatchV2AdminMerchantsIdDepositPoliciesPolicyidMutationResponse,
    PatchV2AdminMerchantsIdDepositPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminMerchantsIdDepositPoliciesPolicyid";

/**
 * @link /v2/admin/merchants/:id/deposit-policies/:policyId
 */
export async function patchV2AdminMerchantsIdDepositPoliciesPolicyid(
    id: PatchV2AdminMerchantsIdDepositPoliciesPolicyidPathParams["id"],
    policyId: PatchV2AdminMerchantsIdDepositPoliciesPolicyidPathParams["policyId"],
    data?: PatchV2AdminMerchantsIdDepositPoliciesPolicyidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminMerchantsIdDepositPoliciesPolicyidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminMerchantsIdDepositPoliciesPolicyidMutationResponse,
        PatchV2AdminMerchantsIdDepositPoliciesPolicyidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/merchants/${id}/deposit-policies/${policyId}`,
        data,
        ...options,
    });
    return res.data;
}
