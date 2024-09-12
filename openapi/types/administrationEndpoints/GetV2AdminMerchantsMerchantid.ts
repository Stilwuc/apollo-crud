import type { MerchantAdminDto } from "../MerchantAdminDto";

export type GetV2AdminMerchantsMerchantidPathParams = {
    /**
     * @type string, uuid
     */
    merchantId: string;
};
/**
 * @description OK
 */
export type GetV2AdminMerchantsMerchantid200 = MerchantAdminDto;
/**
 * @description OK
 */
export type GetV2AdminMerchantsMerchantidQueryResponse = MerchantAdminDto;
export type GetV2AdminMerchantsMerchantidQuery = {
    Response: GetV2AdminMerchantsMerchantidQueryResponse;
    PathParams: GetV2AdminMerchantsMerchantidPathParams;
};
