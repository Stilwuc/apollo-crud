import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminPaymentProvidersIdWithdrawalPoliciesQueryResponse,
    GetV2AdminPaymentProvidersIdWithdrawalPoliciesPathParams,
    GetV2AdminPaymentProvidersIdWithdrawalPoliciesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminPaymentProvidersIdWithdrawalPolicies";

/**
 * @link /v2/admin/payment-providers/:id/withdrawal-policies
 */
export async function getV2AdminPaymentProvidersIdWithdrawalPolicies(
    id: GetV2AdminPaymentProvidersIdWithdrawalPoliciesPathParams["id"],
    params?: GetV2AdminPaymentProvidersIdWithdrawalPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminPaymentProvidersIdWithdrawalPoliciesQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminPaymentProvidersIdWithdrawalPoliciesQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/payment-providers/${id}/withdrawal-policies`,
                params,
                ...options,
            }
        );
    return res.data;
}
