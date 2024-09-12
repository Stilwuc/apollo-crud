import type { TrafficThreadTeamDto } from "../TrafficThreadTeamDto";
import type { CreateTrafficThreadTeam } from "../CreateTrafficThreadTeam";

export type PostV2AdminTrafficThreadsTrafficthreadidTeamsPathParams = {
    /**
     * @type integer, int32
     */
    trafficThreadId: number;
};
/**
 * @description OK
 */
export type PostV2AdminTrafficThreadsTrafficthreadidTeams200 =
    TrafficThreadTeamDto;
export type PostV2AdminTrafficThreadsTrafficthreadidTeamsMutationRequest =
    CreateTrafficThreadTeam;
/**
 * @description OK
 */
export type PostV2AdminTrafficThreadsTrafficthreadidTeamsMutationResponse =
    TrafficThreadTeamDto;
export type PostV2AdminTrafficThreadsTrafficthreadidTeamsMutation = {
    Response: PostV2AdminTrafficThreadsTrafficthreadidTeamsMutationResponse;
    Request: PostV2AdminTrafficThreadsTrafficthreadidTeamsMutationRequest;
    PathParams: PostV2AdminTrafficThreadsTrafficthreadidTeamsPathParams;
};
