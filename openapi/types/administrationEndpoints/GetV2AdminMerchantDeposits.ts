import type { MerchantDepositResponseElementPagedResponseWithTotalCount } from "../MerchantDepositResponseElementPagedResponseWithTotalCount";

export type GetV2AdminMerchantDepositsQueryParams = {
    /**
     * @type string | undefined, uuid
     */
    merchantId?: string;
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    transactionHash?: string;
    /**
     * @type string | undefined
     */
    sortBy?: string;
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
export type GetV2AdminMerchantDeposits200 =
    MerchantDepositResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminMerchantDepositsQueryResponse =
    MerchantDepositResponseElementPagedResponseWithTotalCount;
export type GetV2AdminMerchantDepositsQuery = {
    Response: GetV2AdminMerchantDepositsQueryResponse;
    QueryParams: GetV2AdminMerchantDepositsQueryParams;
};
