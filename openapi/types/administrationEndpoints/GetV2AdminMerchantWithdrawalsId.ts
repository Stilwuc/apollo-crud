import type { MerchantWithdrawalResponseElement } from "../MerchantWithdrawalResponseElement";

export type GetV2AdminMerchantWithdrawalsIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminMerchantWithdrawalsId200 =
    MerchantWithdrawalResponseElement;
/**
 * @description OK
 */
export type GetV2AdminMerchantWithdrawalsIdQueryResponse =
    MerchantWithdrawalResponseElement;
export type GetV2AdminMerchantWithdrawalsIdQuery = {
    Response: GetV2AdminMerchantWithdrawalsIdQueryResponse;
    PathParams: GetV2AdminMerchantWithdrawalsIdPathParams;
};
