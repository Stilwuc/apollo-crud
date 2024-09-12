import type { AffiliateMerchantReportResponse } from "../AffiliateMerchantReportResponse";

export type GetV2AdminAffiliateMerchantReportMerchantreportidPathParams = {
    /**
     * @type integer, int64
     */
    merchantReportId: number;
};
/**
 * @description OK
 */
export type GetV2AdminAffiliateMerchantReportMerchantreportid200 =
    AffiliateMerchantReportResponse;
/**
 * @description OK
 */
export type GetV2AdminAffiliateMerchantReportMerchantreportidQueryResponse =
    AffiliateMerchantReportResponse;
export type GetV2AdminAffiliateMerchantReportMerchantreportidQuery = {
    Response: GetV2AdminAffiliateMerchantReportMerchantreportidQueryResponse;
    PathParams: GetV2AdminAffiliateMerchantReportMerchantreportidPathParams;
};
