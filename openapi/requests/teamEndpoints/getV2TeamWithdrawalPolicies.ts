import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamWithdrawalPoliciesQueryResponse,
    GetV2TeamWithdrawalPoliciesQueryParams,
} from "../../types/teamEndpoints/GetV2TeamWithdrawalPolicies";

/**
 * @link /v2/team/withdrawal-policies
 */
export async function getV2TeamWithdrawalPolicies(
    params?: GetV2TeamWithdrawalPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamWithdrawalPoliciesQueryResponse>["data"]> {
    const res = await client<GetV2TeamWithdrawalPoliciesQueryResponse>({
        method: "get",
        url: `/v2/team/withdrawal-policies`,
        params,
        ...options,
    });
    return res.data;
}
