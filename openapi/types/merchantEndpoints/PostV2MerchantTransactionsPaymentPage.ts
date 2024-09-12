import type { CreateDepositTransactionGetPaymentPageResponse } from "../CreateDepositTransactionGetPaymentPageResponse";
import type { CreateTransactionMerchantRequestBody } from "../CreateTransactionMerchantRequestBody";

/**
 * @description OK
 */
export type PostV2MerchantTransactionsPaymentPage200 =
    CreateDepositTransactionGetPaymentPageResponse;
export type PostV2MerchantTransactionsPaymentPageMutationRequest =
    CreateTransactionMerchantRequestBody;
/**
 * @description OK
 */
export type PostV2MerchantTransactionsPaymentPageMutationResponse =
    CreateDepositTransactionGetPaymentPageResponse;
export type PostV2MerchantTransactionsPaymentPageMutation = {
    Response: PostV2MerchantTransactionsPaymentPageMutationResponse;
    Request: PostV2MerchantTransactionsPaymentPageMutationRequest;
};
