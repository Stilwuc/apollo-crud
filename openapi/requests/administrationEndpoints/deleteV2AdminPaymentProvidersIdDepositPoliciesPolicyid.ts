import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationResponse,
    DeleteV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminPaymentProvidersIdDepositPoliciesPolicyid";

/**
 * @link /v2/admin/payment-providers/:id/deposit-policies/:policyId
 */
export async function deleteV2AdminPaymentProvidersIdDepositPoliciesPolicyid(
    id: DeleteV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams["id"],
    policyId: DeleteV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationResponse>(
            {
                method: "delete",
                url: `/v2/admin/payment-providers/${id}/deposit-policies/${policyId}`,
                ...options,
            }
        );
    return res.data;
}
