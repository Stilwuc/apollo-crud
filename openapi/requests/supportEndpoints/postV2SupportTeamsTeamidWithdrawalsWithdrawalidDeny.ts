import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportTeamsTeamidWithdrawalsWithdrawalidDenyMutationResponse,
    PostV2SupportTeamsTeamidWithdrawalsWithdrawalidDenyPathParams,
} from "../../types/supportEndpoints/PostV2SupportTeamsTeamidWithdrawalsWithdrawalidDeny";

/**
 * @link /v2/support/teams/:teamId/withdrawals/:withdrawalId/deny
 */
export async function postV2SupportTeamsTeamidWithdrawalsWithdrawalidDeny(
    teamId: PostV2SupportTeamsTeamidWithdrawalsWithdrawalidDenyPathParams["teamId"],
    withdrawalId: PostV2SupportTeamsTeamidWithdrawalsWithdrawalidDenyPathParams["withdrawalId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2SupportTeamsTeamidWithdrawalsWithdrawalidDenyMutationResponse>["data"]
> {
    const res =
        await client<PostV2SupportTeamsTeamidWithdrawalsWithdrawalidDenyMutationResponse>(
            {
                method: "post",
                url: `/v2/support/teams/${teamId}/withdrawals/${withdrawalId}/deny`,
                ...options,
            }
        );
    return res.data;
}
