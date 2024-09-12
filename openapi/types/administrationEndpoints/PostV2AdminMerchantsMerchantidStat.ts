import type { Void } from "../Void";
import type { StatisticsParametersRequest } from "../StatisticsParametersRequest";

export type PostV2AdminMerchantsMerchantidStatPathParams = {
    /**
     * @type string, uuid
     */
    merchantId: string;
};
/**
 * @description OK
 */
export type PostV2AdminMerchantsMerchantidStat200 = Void;
export type PostV2AdminMerchantsMerchantidStatMutationRequest =
    StatisticsParametersRequest;
/**
 * @description OK
 */
export type PostV2AdminMerchantsMerchantidStatMutationResponse = Void;
export type PostV2AdminMerchantsMerchantidStatMutation = {
    Response: PostV2AdminMerchantsMerchantidStatMutationResponse;
    Request: PostV2AdminMerchantsMerchantidStatMutationRequest;
    PathParams: PostV2AdminMerchantsMerchantidStatPathParams;
};
