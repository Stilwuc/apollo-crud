import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationResponse,
    DeleteV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyid";

/**
 * @link /v2/admin/payment-providers/:id/withdrawal-policies/:policyId
 */
export async function deleteV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyid(
    id: DeleteV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams["id"],
    policyId: DeleteV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationResponse>(
            {
                method: "delete",
                url: `/v2/admin/payment-providers/${id}/withdrawal-policies/${policyId}`,
                ...options,
            }
        );
    return res.data;
}
