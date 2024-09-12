import type { AcceptTransactionRequest } from "../AcceptTransactionRequest";

export type PostV2SupportTransactionsTransactionidAcceptPathParams = {
    /**
     * @type integer, int64
     */
    transactionId: number;
};
/**
 * @description OK
 */
export type PostV2SupportTransactionsTransactionidAccept200 = unknown;
export type PostV2SupportTransactionsTransactionidAcceptMutationRequest =
    AcceptTransactionRequest;
export type PostV2SupportTransactionsTransactionidAcceptMutationResponse =
    unknown;
export type PostV2SupportTransactionsTransactionidAcceptMutation = {
    Response: PostV2SupportTransactionsTransactionidAcceptMutationResponse;
    Request: PostV2SupportTransactionsTransactionidAcceptMutationRequest;
    PathParams: PostV2SupportTransactionsTransactionidAcceptPathParams;
};
