import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidDisableMutationResponse,
    PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidDisable";

/**
 * @link /v2/admin/traffic-threads/:trafficThreadId/teams/:trafficThreadTeamId/disable
 */
export async function postV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidDisable(
    trafficThreadId: PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidDisablePathParams["trafficThreadId"],
    trafficThreadTeamId: PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidDisablePathParams["trafficThreadTeamId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidDisableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/traffic-threads/${trafficThreadId}/teams/${trafficThreadTeamId}/disable`,
                ...options,
            }
        );
    return res.data;
}
