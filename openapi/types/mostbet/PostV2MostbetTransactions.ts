import type { CreateMostbetDepositTransactionResponse } from "../CreateMostbetDepositTransactionResponse";
import type { CreateDepositTransactionRequestBody } from "../CreateDepositTransactionRequestBody";

/**
 * @description Success
 */
export type PostV2MostbetTransactions200 =
    CreateMostbetDepositTransactionResponse;
export type PostV2MostbetTransactionsMutationRequest =
    CreateDepositTransactionRequestBody;
/**
 * @description Success
 */
export type PostV2MostbetTransactionsMutationResponse =
    CreateMostbetDepositTransactionResponse;
export type PostV2MostbetTransactionsMutation = {
    Response: PostV2MostbetTransactionsMutationResponse;
    Request: PostV2MostbetTransactionsMutationRequest;
};
