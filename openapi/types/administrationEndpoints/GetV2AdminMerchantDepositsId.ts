import type { MerchantDepositResponseElement } from "../MerchantDepositResponseElement";

export type GetV2AdminMerchantDepositsIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminMerchantDepositsId200 = MerchantDepositResponseElement;
/**
 * @description OK
 */
export type GetV2AdminMerchantDepositsIdQueryResponse =
    MerchantDepositResponseElement;
export type GetV2AdminMerchantDepositsIdQuery = {
    Response: GetV2AdminMerchantDepositsIdQueryResponse;
    PathParams: GetV2AdminMerchantDepositsIdPathParams;
};
