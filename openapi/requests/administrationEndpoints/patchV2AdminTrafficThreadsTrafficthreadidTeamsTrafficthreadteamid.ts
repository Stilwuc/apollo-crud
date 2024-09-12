import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationRequest,
    PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationResponse,
    PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamid";

/**
 * @link /v2/admin/traffic-threads/:trafficThreadId/teams/:trafficThreadTeamId
 */
export async function patchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamid(
    trafficThreadId: PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams["trafficThreadId"],
    trafficThreadTeamId: PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams["trafficThreadTeamId"],
    data?: PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationResponse,
        PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/traffic-threads/${trafficThreadId}/teams/${trafficThreadTeamId}`,
        data,
        ...options,
    });
    return res.data;
}
