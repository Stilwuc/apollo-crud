import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidDisableMutationResponse,
    PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidDisable";

/**
 * @link /v2/admin/payment-providers/:id/withdrawal-policies/:policyId/disable
 */
export async function postV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidDisable(
    id: PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidDisablePathParams["id"],
    policyId: PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidDisablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidDisableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/payment-providers/${id}/withdrawal-policies/${policyId}/disable`,
                ...options,
            }
        );
    return res.data;
}
