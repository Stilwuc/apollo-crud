import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamDepositsIdCancelMutationResponse,
    PostV2AdminTeamDepositsIdCancelPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamDepositsIdCancel";

/**
 * @link /v2/admin/team-deposits/:id/cancel
 */
export async function postV2AdminTeamDepositsIdCancel(
    id: PostV2AdminTeamDepositsIdCancelPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamDepositsIdCancelMutationResponse>["data"]
> {
    const res = await client<PostV2AdminTeamDepositsIdCancelMutationResponse>({
        method: "post",
        url: `/v2/admin/team-deposits/${id}/cancel`,
        ...options,
    });
    return res.data;
}
