import type { AffiliateMerchantReportResponseElementPagedResponseWithTotalCount } from "../AffiliateMerchantReportResponseElementPagedResponseWithTotalCount";

export type GetV2AffiliateMerchantReportQueryParams = {
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
export type GetV2AffiliateMerchantReport200 =
    AffiliateMerchantReportResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AffiliateMerchantReportQueryResponse =
    AffiliateMerchantReportResponseElementPagedResponseWithTotalCount;
export type GetV2AffiliateMerchantReportQuery = {
    Response: GetV2AffiliateMerchantReportQueryResponse;
    QueryParams: GetV2AffiliateMerchantReportQueryParams;
};
