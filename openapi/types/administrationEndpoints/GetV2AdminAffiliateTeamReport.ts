import type { AffiliateTeamReportResponsePagedResponseWithTotalCount } from "../AffiliateTeamReportResponsePagedResponseWithTotalCount";

export type GetV2AdminAffiliateTeamReportQueryParams = {
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
    sortBy?: string;
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
};
/**
 * @description OK
 */
export type GetV2AdminAffiliateTeamReport200 =
    AffiliateTeamReportResponsePagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminAffiliateTeamReportQueryResponse =
    AffiliateTeamReportResponsePagedResponseWithTotalCount;
export type GetV2AdminAffiliateTeamReportQuery = {
    Response: GetV2AdminAffiliateTeamReportQueryResponse;
    QueryParams: GetV2AdminAffiliateTeamReportQueryParams;
};
