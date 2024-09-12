import type { TeamDto } from "../TeamDto";
import type { CreateTeamCommand } from "../CreateTeamCommand";

/**
 * @description Created
 */
export type PostV2AdminTeams201 = TeamDto;
export type PostV2AdminTeamsMutationRequest = CreateTeamCommand;
/**
 * @description Created
 */
export type PostV2AdminTeamsMutationResponse = TeamDto;
export type PostV2AdminTeamsMutation = {
    Response: PostV2AdminTeamsMutationResponse;
    Request: PostV2AdminTeamsMutationRequest;
};
