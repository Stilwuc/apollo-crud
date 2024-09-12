import type { TrafficThreadTeamDto } from "../TrafficThreadTeamDto";

export type GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams =
    {
        /**
         * @type integer, int32
         */
        trafficThreadId: number;
        /**
         * @type integer, int32
         */
        trafficThreadTeamId: number;
    };
/**
 * @description OK
 */
export type GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamid200 =
    TrafficThreadTeamDto;
/**
 * @description OK
 */
export type GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidQueryResponse =
    TrafficThreadTeamDto;
export type GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidQuery =
    {
        Response: GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidQueryResponse;
        PathParams: GetV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams;
    };
