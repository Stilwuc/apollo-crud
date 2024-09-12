import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamDepositPoliciesPolicyidQueryResponse,
    GetV2TeamDepositPoliciesPolicyidPathParams,
} from "../../types/teamEndpoints/GetV2TeamDepositPoliciesPolicyid";

/**
 * @link /v2/team/deposit-policies/:policyId
 */
export async function getV2TeamDepositPoliciesPolicyid(
    policyId: GetV2TeamDepositPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2TeamDepositPoliciesPolicyidQueryResponse>["data"]
> {
    const res = await client<GetV2TeamDepositPoliciesPolicyidQueryResponse>({
        method: "get",
        url: `/v2/team/deposit-policies/${policyId}`,
        ...options,
    });
    return res.data;
}
