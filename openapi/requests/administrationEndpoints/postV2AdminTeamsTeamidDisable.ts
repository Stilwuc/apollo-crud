import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsTeamidDisableMutationResponse,
    PostV2AdminTeamsTeamidDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamsTeamidDisable";

/**
 * @link /v2/admin/teams/:teamId/disable
 */
export async function postV2AdminTeamsTeamidDisable(
    teamId: PostV2AdminTeamsTeamidDisablePathParams["teamId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamsTeamidDisableMutationResponse>["data"]
> {
    const res = await client<PostV2AdminTeamsTeamidDisableMutationResponse>({
        method: "post",
        url: `/v2/admin/teams/${teamId}/disable`,
        ...options,
    });
    return res.data;
}
