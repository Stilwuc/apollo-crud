import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidEnableMutationResponse,
    PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidEnable";

/**
 * @link /v2/admin/payment-providers/:id/withdrawal-policies/:policyId/enable
 */
export async function postV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidEnable(
    id: PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidEnablePathParams["id"],
    policyId: PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidEnablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidEnableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/payment-providers/${id}/withdrawal-policies/${policyId}/enable`,
                ...options,
            }
        );
    return res.data;
}
