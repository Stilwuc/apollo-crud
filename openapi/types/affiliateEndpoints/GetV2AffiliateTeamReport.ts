import type { AffiliateTeamReportResponseElementPagedResponseWithTotalCount } from "../AffiliateTeamReportResponseElementPagedResponseWithTotalCount";

export type GetV2AffiliateTeamReportQueryParams = {
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type string | undefined
     */
    teamName?: string;
    /**
     * @type string | undefined
     */
    currencyName?: string;
    /**
     * @type string | undefined, date
     */
    day?: string;
    /**
     * @type string | undefined, date
     */
    dayFrom?: string;
    /**
     * @type string | undefined, date
     */
    dayTo?: string;
    /**
     * @type integer | undefined, int64
     */
    affiliateId?: number;
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
    /**
     * @type string | undefined
     */
    sortBy?: string;
};
/**
 * @description OK
 */
export type GetV2AffiliateTeamReport200 =
    AffiliateTeamReportResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AffiliateTeamReportQueryResponse =
    AffiliateTeamReportResponseElementPagedResponseWithTotalCount;
export type GetV2AffiliateTeamReportQuery = {
    Response: GetV2AffiliateTeamReportQueryResponse;
    QueryParams: GetV2AffiliateTeamReportQueryParams;
};
