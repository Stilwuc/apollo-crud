import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantsIdDepositPoliciesQueryResponse,
    GetV2AdminMerchantsIdDepositPoliciesPathParams,
    GetV2AdminMerchantsIdDepositPoliciesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchantsIdDepositPolicies";

/**
 * @link /v2/admin/merchants/:id/deposit-policies
 */
export async function getV2AdminMerchantsIdDepositPolicies(
    id: GetV2AdminMerchantsIdDepositPoliciesPathParams["id"],
    params?: GetV2AdminMerchantsIdDepositPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminMerchantsIdDepositPoliciesQueryResponse>["data"]
> {
    const res = await client<GetV2AdminMerchantsIdDepositPoliciesQueryResponse>(
        {
            method: "get",
            url: `/v2/admin/merchants/${id}/deposit-policies`,
            params,
            ...options,
        }
    );
    return res.data;
}
