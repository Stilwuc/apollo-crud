import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsTeamidWithdrawalPoliciesMutationRequest,
    PostV2AdminTeamsTeamidWithdrawalPoliciesMutationResponse,
    PostV2AdminTeamsTeamidWithdrawalPoliciesPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamsTeamidWithdrawalPolicies";

/**
 * @link /v2/admin/teams/:teamId/withdrawal-policies
 */
export async function postV2AdminTeamsTeamidWithdrawalPolicies(
    teamId: PostV2AdminTeamsTeamidWithdrawalPoliciesPathParams["teamId"],
    data?: PostV2AdminTeamsTeamidWithdrawalPoliciesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamsTeamidWithdrawalPoliciesMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminTeamsTeamidWithdrawalPoliciesMutationResponse,
        PostV2AdminTeamsTeamidWithdrawalPoliciesMutationRequest
    >({
        method: "post",
        url: `/v2/admin/teams/${teamId}/withdrawal-policies`,
        data,
        ...options,
    });
    return res.data;
}
