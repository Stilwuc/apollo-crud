import type { TeamAdminDto } from "../TeamAdminDto";

export type GetV2AdminTeamsTeamidPathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
};
/**
 * @description OK
 */
export type GetV2AdminTeamsTeamid200 = TeamAdminDto;
/**
 * @description OK
 */
export type GetV2AdminTeamsTeamidQueryResponse = TeamAdminDto;
export type GetV2AdminTeamsTeamidQuery = {
    Response: GetV2AdminTeamsTeamidQueryResponse;
    PathParams: GetV2AdminTeamsTeamidPathParams;
};
