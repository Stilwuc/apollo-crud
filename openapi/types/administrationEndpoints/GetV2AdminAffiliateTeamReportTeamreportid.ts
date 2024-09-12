import type { AffiliateTeamReportResponse } from "../AffiliateTeamReportResponse";

export type GetV2AdminAffiliateTeamReportTeamreportidPathParams = {
    /**
     * @type integer, int64
     */
    teamReportId: number;
};
/**
 * @description OK
 */
export type GetV2AdminAffiliateTeamReportTeamreportid200 =
    AffiliateTeamReportResponse;
/**
 * @description OK
 */
export type GetV2AdminAffiliateTeamReportTeamreportidQueryResponse =
    AffiliateTeamReportResponse;
export type GetV2AdminAffiliateTeamReportTeamreportidQuery = {
    Response: GetV2AdminAffiliateTeamReportTeamreportidQueryResponse;
    PathParams: GetV2AdminAffiliateTeamReportTeamreportidPathParams;
};
