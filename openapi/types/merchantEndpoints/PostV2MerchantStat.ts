import type { Void } from "../Void";
import type { StatisticsParametersRequest } from "../StatisticsParametersRequest";

/**
 * @description OK
 */
export type PostV2MerchantStat200 = Void;
export type PostV2MerchantStatMutationRequest = StatisticsParametersRequest;
/**
 * @description OK
 */
export type PostV2MerchantStatMutationResponse = Void;
export type PostV2MerchantStatMutation = {
    Response: PostV2MerchantStatMutationResponse;
    Request: PostV2MerchantStatMutationRequest;
};
