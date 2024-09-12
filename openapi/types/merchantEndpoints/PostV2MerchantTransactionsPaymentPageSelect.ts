import type { PreCreatePaymentFormDepositTransactionResult } from "../PreCreatePaymentFormDepositTransactionResult";
import type { PreCreateDepositTransactionRequest } from "../PreCreateDepositTransactionRequest";

/**
 * @description OK
 */
export type PostV2MerchantTransactionsPaymentPageSelect200 =
    PreCreatePaymentFormDepositTransactionResult;
export type PostV2MerchantTransactionsPaymentPageSelectMutationRequest =
    PreCreateDepositTransactionRequest;
/**
 * @description OK
 */
export type PostV2MerchantTransactionsPaymentPageSelectMutationResponse =
    PreCreatePaymentFormDepositTransactionResult;
export type PostV2MerchantTransactionsPaymentPageSelectMutation = {
    Response: PostV2MerchantTransactionsPaymentPageSelectMutationResponse;
    Request: PostV2MerchantTransactionsPaymentPageSelectMutationRequest;
};
