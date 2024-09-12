import type { AffiliateResponsePagedResponseWithTotalCount } from "../AffiliateResponsePagedResponseWithTotalCount";

export type GetV2AdminAffiliatesQueryParams = {
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
    name?: string;
    /**
     * @type string | undefined
     */
    Status?: string;
    /**
     * @type string | undefined
     */
    status?: string;
};
/**
 * @description OK
 */
export type GetV2AdminAffiliates200 =
    AffiliateResponsePagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminAffiliatesQueryResponse =
    AffiliateResponsePagedResponseWithTotalCount;
export type GetV2AdminAffiliatesQuery = {
    Response: GetV2AdminAffiliatesQueryResponse;
    QueryParams: GetV2AdminAffiliatesQueryParams;
};
