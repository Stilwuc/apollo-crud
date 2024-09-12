import type { TrafficThreadTeamDto } from "../TrafficThreadTeamDto";

export type GetV2AdminTrafficThreadsTrafficthreadidTeamsPathParams = {
    /**
     * @type integer, int32
     */
    trafficThreadId: number;
};
/**
 * @description OK
 */
export type GetV2AdminTrafficThreadsTrafficthreadidTeams200 =
    TrafficThreadTeamDto[];
/**
 * @description OK
 */
export type GetV2AdminTrafficThreadsTrafficthreadidTeamsQueryResponse =
    TrafficThreadTeamDto[];
export type GetV2AdminTrafficThreadsTrafficthreadidTeamsQuery = {
    Response: GetV2AdminTrafficThreadsTrafficthreadidTeamsQueryResponse;
    PathParams: GetV2AdminTrafficThreadsTrafficthreadidTeamsPathParams;
};
