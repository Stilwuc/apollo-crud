import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTrafficThreadsTrafficthreadidTeamsMutationRequest,
    PostV2AdminTrafficThreadsTrafficthreadidTeamsMutationResponse,
    PostV2AdminTrafficThreadsTrafficthreadidTeamsPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTrafficThreadsTrafficthreadidTeams";

/**
 * @link /v2/admin/traffic-threads/:trafficThreadId/teams
 */
export async function postV2AdminTrafficThreadsTrafficthreadidTeams(
    trafficThreadId: PostV2AdminTrafficThreadsTrafficthreadidTeamsPathParams["trafficThreadId"],
    data?: PostV2AdminTrafficThreadsTrafficthreadidTeamsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTrafficThreadsTrafficthreadidTeamsMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminTrafficThreadsTrafficthreadidTeamsMutationResponse,
        PostV2AdminTrafficThreadsTrafficthreadidTeamsMutationRequest
    >({
        method: "post",
        url: `/v2/admin/traffic-threads/${trafficThreadId}/teams`,
        data,
        ...options,
    });
    return res.data;
}
