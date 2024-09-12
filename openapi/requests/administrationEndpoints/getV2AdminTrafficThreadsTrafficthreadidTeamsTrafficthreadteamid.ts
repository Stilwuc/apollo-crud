import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidQueryResponse,
    GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamid";

/**
 * @link /v2/admin/traffic-threads/:trafficThreadId/teams/:trafficThreadTeamId
 */
export async function getV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamid(
    trafficThreadId: GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams["trafficThreadId"],
    trafficThreadTeamId: GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams["trafficThreadTeamId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/traffic-threads/${trafficThreadId}/teams/${trafficThreadTeamId}`,
                ...options,
            }
        );
    return res.data;
}
