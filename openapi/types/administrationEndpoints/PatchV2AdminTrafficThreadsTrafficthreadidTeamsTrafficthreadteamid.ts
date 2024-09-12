import type { TrafficThreadTeamDto } from "../TrafficThreadTeamDto";
import type { UpdateTrafficThreadTeam } from "../UpdateTrafficThreadTeam";

export type PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams =
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
export type PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamid200 =
    TrafficThreadTeamDto;
export type PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationRequest =
    UpdateTrafficThreadTeam;
/**
 * @description OK
 */
export type PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationResponse =
    TrafficThreadTeamDto;
export type PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutation =
    {
        Response: PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationResponse;
        Request: PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidMutationRequest;
        PathParams: PatchV2AdminTrafficThreadsTrafficthreadidTeamsTrafficthreadteamidPathParams;
    };
