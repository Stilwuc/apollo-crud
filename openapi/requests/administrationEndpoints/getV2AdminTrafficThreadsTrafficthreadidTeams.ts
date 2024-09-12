import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTrafficThreadsTrafficthreadidTeamsQueryResponse,
    GetV2AdminTrafficThreadsTrafficthreadidTeamsPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTrafficThreadsTrafficthreadidTeams";

/**
 * @link /v2/admin/traffic-threads/:trafficThreadId/teams
 */
export async function getV2AdminTrafficThreadsTrafficthreadidTeams(
    trafficThreadId: GetV2AdminTrafficThreadsTrafficthreadidTeamsPathParams["trafficThreadId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTrafficThreadsTrafficthreadidTeamsQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminTrafficThreadsTrafficthreadidTeamsQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/traffic-threads/${trafficThreadId}/teams`,
                ...options,
            }
        );
    return res.data;
}
