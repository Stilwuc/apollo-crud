import type { TeamRequisiteDto } from "../TeamRequisiteDto";

export type GetV2AdminTeamsTeamidRequisitesPathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
};
/**
 * @description OK
 */
export type GetV2AdminTeamsTeamidRequisites200 = TeamRequisiteDto[];
/**
 * @description OK
 */
export type GetV2AdminTeamsTeamidRequisitesQueryResponse = TeamRequisiteDto[];
export type GetV2AdminTeamsTeamidRequisitesQuery = {
    Response: GetV2AdminTeamsTeamidRequisitesQueryResponse;
    PathParams: GetV2AdminTeamsTeamidRequisitesPathParams;
};
