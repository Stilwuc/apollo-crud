import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidEnableMutationResponse,
    PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidEnable";

/**
 * @link /v2/admin/teams/:teamId/withdrawal-policies/:policyId/enable
 */
export async function postV2AdminTeamsTeamidWithdrawalPoliciesPolicyidEnable(
    teamId: PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidEnablePathParams["teamId"],
    policyId: PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidEnablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTeamsTeamidWithdrawalPoliciesPolicyidEnableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/teams/${teamId}/withdrawal-policies/${policyId}/enable`,
                ...options,
            }
        );
    return res.data;
}
