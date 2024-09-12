import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamsIdDepositPoliciesQueryResponse,
    GetV2AdminTeamsIdDepositPoliciesPathParams,
    GetV2AdminTeamsIdDepositPoliciesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamsIdDepositPolicies";

/**
 * @link /v2/admin/teams/:id/deposit-policies
 */
export async function getV2AdminTeamsIdDepositPolicies(
    id: GetV2AdminTeamsIdDepositPoliciesPathParams["id"],
    params?: GetV2AdminTeamsIdDepositPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTeamsIdDepositPoliciesQueryResponse>["data"]
> {
    const res = await client<GetV2AdminTeamsIdDepositPoliciesQueryResponse>({
        method: "get",
        url: `/v2/admin/teams/${id}/deposit-policies`,
        params,
        ...options,
    });
    return res.data;
}
