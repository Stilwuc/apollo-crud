import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminPaymentProvidersIdWithdrawalPoliciesMutationRequest,
    PostV2AdminPaymentProvidersIdWithdrawalPoliciesMutationResponse,
    PostV2AdminPaymentProvidersIdWithdrawalPoliciesPathParams,
} from "../../types/administrationEndpoints/PostV2AdminPaymentProvidersIdWithdrawalPolicies";

/**
 * @link /v2/admin/payment-providers/:id/withdrawal-policies
 */
export async function postV2AdminPaymentProvidersIdWithdrawalPolicies(
    id: PostV2AdminPaymentProvidersIdWithdrawalPoliciesPathParams["id"],
    data?: PostV2AdminPaymentProvidersIdWithdrawalPoliciesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminPaymentProvidersIdWithdrawalPoliciesMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminPaymentProvidersIdWithdrawalPoliciesMutationResponse,
        PostV2AdminPaymentProvidersIdWithdrawalPoliciesMutationRequest
    >({
        method: "post",
        url: `/v2/admin/payment-providers/${id}/withdrawal-policies`,
        data,
        ...options,
    });
    return res.data;
}
