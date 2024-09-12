import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationResponse,
    DeleteV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamid";

/**
 * @link /v2/admin/traffic-threads/:trafficThreadId/teams/:trafficThreadTeamId
 */
export async function deleteV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamid(
    trafficThreadId: DeleteV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams["trafficThreadId"],
    trafficThreadTeamId: DeleteV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams["trafficThreadTeamId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationResponse>(
            {
                method: "delete",
                url: `/v2/admin/traffic-threads/${trafficThreadId}/teams/${trafficThreadTeamId}`,
                ...options,
            }
        );
    return res.data;
}
