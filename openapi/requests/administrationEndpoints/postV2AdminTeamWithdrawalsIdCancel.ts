import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamWithdrawalsIdCancelMutationResponse,
    PostV2AdminTeamWithdrawalsIdCancelPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamWithdrawalsIdCancel";

/**
 * @link /v2/admin/team-withdrawals/:id/cancel
 */
export async function postV2AdminTeamWithdrawalsIdCancel(
    id: PostV2AdminTeamWithdrawalsIdCancelPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamWithdrawalsIdCancelMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTeamWithdrawalsIdCancelMutationResponse>({
            method: "post",
            url: `/v2/admin/team-withdrawals/${id}/cancel`,
            ...options,
        });
    return res.data;
}
