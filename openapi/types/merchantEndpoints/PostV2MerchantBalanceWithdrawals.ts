import type { WithdrawMerchantBalanceResult } from "../WithdrawMerchantBalanceResult";
import type { ApiClientCreateWaithdrawalRequestDto } from "../ApiClientCreateWaithdrawalRequestDto";

/**
 * @description OK
 */
export type PostV2MerchantBalanceWithdrawals200 = WithdrawMerchantBalanceResult;
export type PostV2MerchantBalanceWithdrawalsMutationRequest =
    ApiClientCreateWaithdrawalRequestDto;
/**
 * @description OK
 */
export type PostV2MerchantBalanceWithdrawalsMutationResponse =
    WithdrawMerchantBalanceResult;
export type PostV2MerchantBalanceWithdrawalsMutation = {
    Response: PostV2MerchantBalanceWithdrawalsMutationResponse;
    Request: PostV2MerchantBalanceWithdrawalsMutationRequest;
};
