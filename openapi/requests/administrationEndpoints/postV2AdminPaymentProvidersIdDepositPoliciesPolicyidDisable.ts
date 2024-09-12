import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidDisableMutationResponse,
    PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidDisable";

/**
 * @link /v2/admin/payment-providers/:id/deposit-policies/:policyId/disable
 */
export async function postV2AdminPaymentProvidersIdDepositPoliciesPolicyidDisable(
    id: PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidDisablePathParams["id"],
    policyId: PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidDisablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidDisableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/payment-providers/${id}/deposit-policies/${policyId}/disable`,
                ...options,
            }
        );
    return res.data;
}
