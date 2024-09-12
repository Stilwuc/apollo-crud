import type { AppellationInfoResponse } from "../AppellationInfoResponse";

export type GetV2MerchantAppealsIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2MerchantAppealsId200 = AppellationInfoResponse;
/**
 * @description OK
 */
export type GetV2MerchantAppealsIdQueryResponse = AppellationInfoResponse;
export type GetV2MerchantAppealsIdQuery = {
    Response: GetV2MerchantAppealsIdQueryResponse;
    PathParams: GetV2MerchantAppealsIdPathParams;
};
