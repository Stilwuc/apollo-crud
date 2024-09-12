import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidEnableMutationResponse,
    PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidEnable";

/**
 * @link /v2/admin/payment-providers/:id/deposit-policies/:policyId/enable
 */
export async function postV2AdminPaymentProvidersIdDepositPoliciesPolicyidEnable(
    id: PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidEnablePathParams["id"],
    policyId: PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidEnablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminPaymentProvidersIdDepositPoliciesPolicyidEnableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/payment-providers/${id}/deposit-policies/${policyId}/enable`,
                ...options,
            }
        );
    return res.data;
}
