import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationRequest,
    PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationResponse,
    PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyid";

/**
 * @link /v2/admin/payment-providers/:id/withdrawal-policies/:policyId
 */
export async function patchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyid(
    id: PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams["id"],
    policyId: PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams["policyId"],
    data?: PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationResponse,
        PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/payment-providers/${id}/withdrawal-policies/${policyId}`,
        data,
        ...options,
    });
    return res.data;
}
