import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamWithdrawalsIdApplyMutationRequest,
    PostV2AdminTeamWithdrawalsIdApplyMutationResponse,
    PostV2AdminTeamWithdrawalsIdApplyPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamWithdrawalsIdApply";

/**
 * @link /v2/admin/team-withdrawals/:id/apply
 */
export async function postV2AdminTeamWithdrawalsIdApply(
    id: PostV2AdminTeamWithdrawalsIdApplyPathParams["id"],
    data?: PostV2AdminTeamWithdrawalsIdApplyMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamWithdrawalsIdApplyMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminTeamWithdrawalsIdApplyMutationResponse,
        PostV2AdminTeamWithdrawalsIdApplyMutationRequest
    >({
        method: "post",
        url: `/v2/admin/team-withdrawals/${id}/apply`,
        data,
        ...options,
    });
    return res.data;
}
