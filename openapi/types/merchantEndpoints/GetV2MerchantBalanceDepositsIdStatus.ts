import type { MerchantStatusDepositResponseDto } from "../MerchantStatusDepositResponseDto";

export type GetV2MerchantBalanceDepositsIdStatusPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2MerchantBalanceDepositsIdStatus200 =
    MerchantStatusDepositResponseDto;
/**
 * @description OK
 */
export type GetV2MerchantBalanceDepositsIdStatusQueryResponse =
    MerchantStatusDepositResponseDto;
export type GetV2MerchantBalanceDepositsIdStatusQuery = {
    Response: GetV2MerchantBalanceDepositsIdStatusQueryResponse;
    PathParams: GetV2MerchantBalanceDepositsIdStatusPathParams;
};
