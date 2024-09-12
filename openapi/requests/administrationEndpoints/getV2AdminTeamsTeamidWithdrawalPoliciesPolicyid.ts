import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyidQueryResponse,
    GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyid";

/**
 * @link /v2/admin/teams/:teamId/withdrawal-policies/:policyId
 */
export async function getV2AdminTeamsTeamidWithdrawalPoliciesPolicyid(
    teamId: GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams["teamId"],
    policyId: GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyidQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyidQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/teams/${teamId}/withdrawal-policies/${policyId}`,
                ...options,
            }
        );
    return res.data;
}
