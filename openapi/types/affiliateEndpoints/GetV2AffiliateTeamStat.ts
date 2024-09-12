import type { AffiliateTeamStatisticResponseElementPagedResponseWithTotalCount } from "../AffiliateTeamStatisticResponseElementPagedResponseWithTotalCount";

export type GetV2AffiliateTeamStatQueryParams = {
    /**
     * @type string | undefined
     */
    teamName?: string;
    /**
     * @type string | undefined, date
     */
    dayFrom?: string;
    /**
     * @type string | undefined, date
     */
    dayTo?: string;
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
/**
 * @description OK
 */
export type GetV2AffiliateTeamStat200 =
    AffiliateTeamStatisticResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AffiliateTeamStatQueryResponse =
    AffiliateTeamStatisticResponseElementPagedResponseWithTotalCount;
export type GetV2AffiliateTeamStatQuery = {
    Response: GetV2AffiliateTeamStatQueryResponse;
    QueryParams: GetV2AffiliateTeamStatQueryParams;
};
