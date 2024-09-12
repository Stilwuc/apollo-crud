import type { MerchantPendingDepositResponseDto } from "../MerchantPendingDepositResponseDto";

/**
 * @description OK
 */
export type GetV2MerchantBalanceDepositsUnpaid200 =
    MerchantPendingDepositResponseDto;
/**
 * @description OK
 */
export type GetV2MerchantBalanceDepositsUnpaidQueryResponse =
    MerchantPendingDepositResponseDto;
export type GetV2MerchantBalanceDepositsUnpaidQuery = {
    Response: GetV2MerchantBalanceDepositsUnpaidQueryResponse;
};
