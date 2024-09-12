import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsTeamidEnableMutationResponse,
    PostV2AdminTeamsTeamidEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamsTeamidEnable";

/**
 * @link /v2/admin/teams/:teamId/enable
 */
export async function postV2AdminTeamsTeamidEnable(
    teamId: PostV2AdminTeamsTeamidEnablePathParams["teamId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamsTeamidEnableMutationResponse>["data"]
> {
    const res = await client<PostV2AdminTeamsTeamidEnableMutationResponse>({
        method: "post",
        url: `/v2/admin/teams/${teamId}/enable`,
        ...options,
    });
    return res.data;
}
