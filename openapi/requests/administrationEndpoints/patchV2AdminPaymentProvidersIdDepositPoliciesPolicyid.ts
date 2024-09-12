import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationRequest,
    PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationResponse,
    PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyid";

/**
 * @link /v2/admin/payment-providers/:id/deposit-policies/:policyId
 */
export async function patchV2AdminPaymentProvidersIdDepositPoliciesPolicyid(
    id: PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams["id"],
    policyId: PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams["policyId"],
    data?: PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationResponse,
        PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/payment-providers/${id}/deposit-policies/${policyId}`,
        data,
        ...options,
    });
    return res.data;
}
