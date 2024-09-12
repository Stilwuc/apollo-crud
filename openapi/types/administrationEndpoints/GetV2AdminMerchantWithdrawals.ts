import type { MerchantWithdrawalResponseElementPagedResponseWithTotalCount } from "../MerchantWithdrawalResponseElementPagedResponseWithTotalCount";

export type GetV2AdminMerchantWithdrawalsQueryParams = {
    /**
     * @type string | undefined, uuid
     */
    MerchantId?: string;
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
export type GetV2AdminMerchantWithdrawals200 =
    MerchantWithdrawalResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminMerchantWithdrawalsQueryResponse =
    MerchantWithdrawalResponseElementPagedResponseWithTotalCount;
export type GetV2AdminMerchantWithdrawalsQuery = {
    Response: GetV2AdminMerchantWithdrawalsQueryResponse;
    QueryParams: GetV2AdminMerchantWithdrawalsQueryParams;
};
