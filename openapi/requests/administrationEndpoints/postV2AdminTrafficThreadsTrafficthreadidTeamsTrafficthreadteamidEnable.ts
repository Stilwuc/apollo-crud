import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidEnableMutationResponse,
    PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidEnable";

/**
 * @link /v2/admin/traffic-threads/:trafficThreadId/teams/:trafficThreadTeamId/enable
 */
export async function postV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidEnable(
    trafficThreadId: PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidEnablePathParams["trafficThreadId"],
    trafficThreadTeamId: PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidEnablePathParams["trafficThreadTeamId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidEnableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/traffic-threads/${trafficThreadId}/teams/${trafficThreadTeamId}/enable`,
                ...options,
            }
        );
    return res.data;
}
