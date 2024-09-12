import type { AffiliateMerchantStatisticResponseElementPagedResponseWithTotalCount } from "../AffiliateMerchantStatisticResponseElementPagedResponseWithTotalCount";

export type GetV2AffiliateMerchantStatQueryParams = {
    /**
     * @type string | undefined
     */
    merchantName?: string;
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
export type GetV2AffiliateMerchantStat200 =
    AffiliateMerchantStatisticResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AffiliateMerchantStatQueryResponse =
    AffiliateMerchantStatisticResponseElementPagedResponseWithTotalCount;
export type GetV2AffiliateMerchantStatQuery = {
    Response: GetV2AffiliateMerchantStatQueryResponse;
    QueryParams: GetV2AffiliateMerchantStatQueryParams;
};
