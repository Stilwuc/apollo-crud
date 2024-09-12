import type { Void } from "../Void";

export type GetV2AdminMerchantsMerchantidStatPathParams = {
    /**
     * @type string, uuid
     */
    merchantId: string;
};
/**
 * @description OK
 */
export type GetV2AdminMerchantsMerchantidStat200 = Void;
/**
 * @description OK
 */
export type GetV2AdminMerchantsMerchantidStatQueryResponse = Void;
export type GetV2AdminMerchantsMerchantidStatQuery = {
    Response: GetV2AdminMerchantsMerchantidStatQueryResponse;
    PathParams: GetV2AdminMerchantsMerchantidStatPathParams;
};
