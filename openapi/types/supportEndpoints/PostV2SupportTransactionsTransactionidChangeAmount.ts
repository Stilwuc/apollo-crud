import type { ChangeTransactionAmountSupportRequest } from "../ChangeTransactionAmountSupportRequest";

export type PostV2SupportTransactionsTransactionidChangeAmountPathParams = {
    /**
     * @type integer, int64
     */
    transactionId: number;
};
/**
 * @description OK
 */
export type PostV2SupportTransactionsTransactionidChangeAmount200 = unknown;
export type PostV2SupportTransactionsTransactionidChangeAmountMutationRequest =
    ChangeTransactionAmountSupportRequest;
export type PostV2SupportTransactionsTransactionidChangeAmountMutationResponse =
    unknown;
export type PostV2SupportTransactionsTransactionidChangeAmountMutation = {
    Response: PostV2SupportTransactionsTransactionidChangeAmountMutationResponse;
    Request: PostV2SupportTransactionsTransactionidChangeAmountMutationRequest;
    PathParams: PostV2SupportTransactionsTransactionidChangeAmountPathParams;
};
