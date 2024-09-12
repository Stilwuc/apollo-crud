import type { TeamDto } from "../TeamDto";
import type { UpdateTeamRequestBody } from "../UpdateTeamRequestBody";

export type PatchV2AdminTeamsTeamidPathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
};
/**
 * @description OK
 */
export type PatchV2AdminTeamsTeamid200 = TeamDto;
export type PatchV2AdminTeamsTeamidMutationRequest = UpdateTeamRequestBody;
/**
 * @description OK
 */
export type PatchV2AdminTeamsTeamidMutationResponse = TeamDto;
export type PatchV2AdminTeamsTeamidMutation = {
    Response: PatchV2AdminTeamsTeamidMutationResponse;
    Request: PatchV2AdminTeamsTeamidMutationRequest;
    PathParams: PatchV2AdminTeamsTeamidPathParams;
};
