import type { AffiliateMerchantPolicyResponsePagedResponseWithTotalCount } from "../AffiliateMerchantPolicyResponsePagedResponseWithTotalCount";

export type GetV2AdminAffiliateMerchantReportQueryParams = {
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
    merchantName?: string;
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
     * @type string | undefined, uuid
     */
    merchantId?: string;
    /**
     * @type integer | undefined, int64
     */
    affiliateId?: number;
    /**
     * @type string | undefined
     */
    sortBy?: string;
};
/**
 * @description OK
 */
export type GetV2AdminAffiliateMerchantReport200 =
    AffiliateMerchantPolicyResponsePagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminAffiliateMerchantReportQueryResponse =
    AffiliateMerchantPolicyResponsePagedResponseWithTotalCount;
export type GetV2AdminAffiliateMerchantReportQuery = {
    Response: GetV2AdminAffiliateMerchantReportQueryResponse;
    QueryParams: GetV2AdminAffiliateMerchantReportQueryParams;
};
