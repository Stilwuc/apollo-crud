import type { MerchantCreateWithdrawalTransactionResponse } from "../MerchantCreateWithdrawalTransactionResponse";
import type { CreateWithdrawalTransactionRequest } from "../CreateWithdrawalTransactionRequest";

/**
 * @description OK
 */
export type PostV2MerchantTransactionsWithdrawal200 =
    MerchantCreateWithdrawalTransactionResponse;
export type PostV2MerchantTransactionsWithdrawalMutationRequest =
    CreateWithdrawalTransactionRequest;
/**
 * @description OK
 */
export type PostV2MerchantTransactionsWithdrawalMutationResponse =
    MerchantCreateWithdrawalTransactionResponse;
export type PostV2MerchantTransactionsWithdrawalMutation = {
    Response: PostV2MerchantTransactionsWithdrawalMutationResponse;
    Request: PostV2MerchantTransactionsWithdrawalMutationRequest;
};
