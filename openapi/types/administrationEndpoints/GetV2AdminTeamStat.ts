import type { ActiveTeamDto } from "../ActiveTeamDto";

/**
 * @description OK
 */
export type GetV2AdminTeamStat200 = ActiveTeamDto[];
/**
 * @description OK
 */
export type GetV2AdminTeamStatQueryResponse = ActiveTeamDto[];
export type GetV2AdminTeamStatQuery = {
    Response: GetV2AdminTeamStatQueryResponse;
};
