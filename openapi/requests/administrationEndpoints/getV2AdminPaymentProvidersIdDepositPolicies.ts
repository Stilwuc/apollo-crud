import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminPaymentProvidersIdDepositPoliciesQueryResponse,
    GetV2AdminPaymentProvidersIdDepositPoliciesPathParams,
    GetV2AdminPaymentProvidersIdDepositPoliciesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminPaymentProvidersIdDepositPolicies";

/**
 * @link /v2/admin/payment-providers/:id/deposit-policies
 */
export async function getV2AdminPaymentProvidersIdDepositPolicies(
    id: GetV2AdminPaymentProvidersIdDepositPoliciesPathParams["id"],
    params?: GetV2AdminPaymentProvidersIdDepositPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminPaymentProvidersIdDepositPoliciesQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminPaymentProvidersIdDepositPoliciesQueryResponse>({
            method: "get",
            url: `/v2/admin/payment-providers/${id}/deposit-policies`,
            params,
            ...options,
        });
    return res.data;
}
