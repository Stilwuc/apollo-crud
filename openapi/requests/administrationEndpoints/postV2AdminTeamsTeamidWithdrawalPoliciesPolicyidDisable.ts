import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidDisableMutationResponse,
    PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidDisable";

/**
 * @link /v2/admin/teams/:teamId/withdrawal-policies/:policyId/disable
 */
export async function postV2AdminTeamsTeamidWithdrawalPoliciesPolicyidDisable(
    teamId: PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidDisablePathParams["teamId"],
    policyId: PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidDisablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidDisableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/teams/${teamId}/withdrawal-policies/${policyId}/disable`,
                ...options,
            }
        );
    return res.data;
}
