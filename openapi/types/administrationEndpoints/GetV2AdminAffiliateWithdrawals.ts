import type { AffiliateWithdrawalResponseElementPagedResponseWithTotalCount } from "../AffiliateWithdrawalResponseElementPagedResponseWithTotalCount";

export type GetV2AdminAffiliateWithdrawalsQueryParams = {
    /**
     * @type integer | undefined, int64
     */
    AffiliateId?: number;
    /**
     * @type string | undefined
     */
    TransactionHash?: string;
    /**
     * @type number | undefined, double
     */
    Amount?: number;
    /**
     * @type string | undefined
     */
    status?: string;
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
};
/**
 * @description OK
 */
export type GetV2AdminAffiliateWithdrawals200 =
    AffiliateWithdrawalResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminAffiliateWithdrawalsQueryResponse =
    AffiliateWithdrawalResponseElementPagedResponseWithTotalCount;
export type GetV2AdminAffiliateWithdrawalsQuery = {
    Response: GetV2AdminAffiliateWithdrawalsQueryResponse;
    QueryParams: GetV2AdminAffiliateWithdrawalsQueryParams;
};
