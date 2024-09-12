import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminPaymentProvidersIdDepositPoliciesPolicyidQueryResponse,
    GetV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminPaymentProvidersIdDepositPoliciesPolicyid";

/**
 * @link /v2/admin/payment-providers/:id/deposit-policies/:policyId
 */
export async function getV2AdminPaymentProvidersIdDepositPoliciesPolicyid(
    id: GetV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams["id"],
    policyId: GetV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminPaymentProvidersIdDepositPoliciesPolicyidQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminPaymentProvidersIdDepositPoliciesPolicyidQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/payment-providers/${id}/deposit-policies/${policyId}`,
                ...options,
            }
        );
    return res.data;
}
