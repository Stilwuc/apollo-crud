import type { Void } from "../Void";

export type GetV2AdminTeamsTeamidStatPathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
};
/**
 * @description OK
 */
export type GetV2AdminTeamsTeamidStat200 = Void;
/**
 * @description OK
 */
export type GetV2AdminTeamsTeamidStatQueryResponse = Void;
export type GetV2AdminTeamsTeamidStatQuery = {
    Response: GetV2AdminTeamsTeamidStatQueryResponse;
    PathParams: GetV2AdminTeamsTeamidStatPathParams;
};
