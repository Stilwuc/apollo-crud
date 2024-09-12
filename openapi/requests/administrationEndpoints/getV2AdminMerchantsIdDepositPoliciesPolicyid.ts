import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantsIdDepositPoliciesPolicyidQueryResponse,
    GetV2AdminMerchantsIdDepositPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchantsIdDepositPoliciesPolicyid";

/**
 * @link /v2/admin/merchants/:id/deposit-policies/:policyId
 */
export async function getV2AdminMerchantsIdDepositPoliciesPolicyid(
    id: GetV2AdminMerchantsIdDepositPoliciesPolicyidPathParams["id"],
    policyId: GetV2AdminMerchantsIdDepositPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminMerchantsIdDepositPoliciesPolicyidQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminMerchantsIdDepositPoliciesPolicyidQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/merchants/${id}/deposit-policies/${policyId}`,
                ...options,
            }
        );
    return res.data;
}
