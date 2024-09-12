import type { AffiliateWithdrawalResponsePagedResponseWithTotalCount } from "../AffiliateWithdrawalResponsePagedResponseWithTotalCount";

export type GetV2AffiliateWithdrawalRequestsQueryParams = {
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
    address?: string;
    /**
     * @type string | undefined, date
     */
    day?: string;
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type string | undefined, date
     */
    createdFrom?: string;
    /**
     * @type string | undefined, date
     */
    createdTo?: string;
    /**
     * @type string | undefined
     */
    sortBy?: string;
};
/**
 * @description OK
 */
export type GetV2AffiliateWithdrawalRequests200 =
    AffiliateWithdrawalResponsePagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AffiliateWithdrawalRequestsQueryResponse =
    AffiliateWithdrawalResponsePagedResponseWithTotalCount;
export type GetV2AffiliateWithdrawalRequestsQuery = {
    Response: GetV2AffiliateWithdrawalRequestsQueryResponse;
    QueryParams: GetV2AffiliateWithdrawalRequestsQueryParams;
};
