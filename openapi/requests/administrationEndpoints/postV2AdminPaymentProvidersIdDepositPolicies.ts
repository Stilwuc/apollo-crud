import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminPaymentProvidersIdDepositPoliciesMutationRequest,
    PostV2AdminPaymentProvidersIdDepositPoliciesMutationResponse,
    PostV2AdminPaymentProvidersIdDepositPoliciesPathParams,
} from "../../types/administrationEndpoints/PostV2AdminPaymentProvidersIdDepositPolicies";

/**
 * @link /v2/admin/payment-providers/:id/deposit-policies
 */
export async function postV2AdminPaymentProvidersIdDepositPolicies(
    id: PostV2AdminPaymentProvidersIdDepositPoliciesPathParams["id"],
    data?: PostV2AdminPaymentProvidersIdDepositPoliciesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminPaymentProvidersIdDepositPoliciesMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminPaymentProvidersIdDepositPoliciesMutationResponse,
        PostV2AdminPaymentProvidersIdDepositPoliciesMutationRequest
    >({
        method: "post",
        url: `/v2/admin/payment-providers/${id}/deposit-policies`,
        data,
        ...options,
    });
    return res.data;
}
