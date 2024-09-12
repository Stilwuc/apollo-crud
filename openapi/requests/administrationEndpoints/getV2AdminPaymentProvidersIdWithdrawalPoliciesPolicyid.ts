import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidQueryResponse,
    GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyid";

/**
 * @link /v2/admin/payment-providers/:id/withdrawal-policies/:policyId
 */
export async function getV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyid(
    id: GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams["id"],
    policyId: GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/payment-providers/${id}/withdrawal-policies/${policyId}`,
                ...options,
            }
        );
    return res.data;
}
