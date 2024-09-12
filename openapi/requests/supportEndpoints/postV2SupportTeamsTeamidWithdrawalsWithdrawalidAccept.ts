import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptMutationRequest,
    PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptMutationResponse,
    PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptPathParams,
} from "../../types/supportEndpoints/PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAccept";

/**
 * @link /v2/support/teams/:teamId/withdrawals/:withdrawalId/accept
 */
export async function postV2SupportTeamsTeamidWithdrawalsWithdrawalidAccept(
    teamId: PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptPathParams["teamId"],
    withdrawalId: PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptPathParams["withdrawalId"],
    data?: PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptMutationResponse>["data"]
> {
    const res = await client<
        PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptMutationResponse,
        PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptMutationRequest
    >({
        method: "post",
        url: `/v2/support/teams/${teamId}/withdrawals/${withdrawalId}/accept`,
        data,
        ...options,
    });
    return res.data;
}
