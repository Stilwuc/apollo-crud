import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamsTeamidWithdrawalPoliciesQueryResponse,
    GetV2AdminTeamsTeamidWithdrawalPoliciesPathParams,
    GetV2AdminTeamsTeamidWithdrawalPoliciesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamsTeamidWithdrawalPolicies";

/**
 * @link /v2/admin/teams/:teamId/withdrawal-policies
 */
export async function getV2AdminTeamsTeamidWithdrawalPolicies(
    teamId: GetV2AdminTeamsTeamidWithdrawalPoliciesPathParams["teamId"],
    params?: GetV2AdminTeamsTeamidWithdrawalPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTeamsTeamidWithdrawalPoliciesQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminTeamsTeamidWithdrawalPoliciesQueryResponse>({
            method: "get",
            url: `/v2/admin/teams/${teamId}/withdrawal-policies`,
            params,
            ...options,
        });
    return res.data;
}
