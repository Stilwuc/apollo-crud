import type { CreateDepositTransactionWithCardResponse } from "../CreateDepositTransactionWithCardResponse";
import type { CreateTransactionMerchantRequestBody } from "../CreateTransactionMerchantRequestBody";

/**
 * @description OK
 */
export type PostV2MerchantTransactions200 =
    CreateDepositTransactionWithCardResponse;
export type PostV2MerchantTransactionsMutationRequest =
    CreateTransactionMerchantRequestBody;
/**
 * @description OK
 */
export type PostV2MerchantTransactionsMutationResponse =
    CreateDepositTransactionWithCardResponse;
export type PostV2MerchantTransactionsMutation = {
    Response: PostV2MerchantTransactionsMutationResponse;
    Request: PostV2MerchantTransactionsMutationRequest;
};
