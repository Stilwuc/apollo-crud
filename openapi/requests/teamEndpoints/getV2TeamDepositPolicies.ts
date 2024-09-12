import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamDepositPoliciesQueryResponse,
    GetV2TeamDepositPoliciesQueryParams,
} from "../../types/teamEndpoints/GetV2TeamDepositPolicies";

/**
 * @link /v2/team/deposit-policies
 */
export async function getV2TeamDepositPolicies(
    params?: GetV2TeamDepositPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamDepositPoliciesQueryResponse>["data"]> {
    const res = await client<GetV2TeamDepositPoliciesQueryResponse>({
        method: "get",
        url: `/v2/team/deposit-policies`,
        params,
        ...options,
    });
    return res.data;
}
