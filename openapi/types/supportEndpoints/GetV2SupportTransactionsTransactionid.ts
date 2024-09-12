import type { TransactionResult } from "../TransactionResult";

export type GetV2SupportTransactionsTransactionidPathParams = {
    /**
     * @type integer, int64
     */
    transactionId: number;
};
/**
 * @description OK
 */
export type GetV2SupportTransactionsTransactionid200 = TransactionResult;
/**
 * @description OK
 */
export type GetV2SupportTransactionsTransactionidQueryResponse =
    TransactionResult;
export type GetV2SupportTransactionsTransactionidQuery = {
    Response: GetV2SupportTransactionsTransactionidQueryResponse;
    PathParams: GetV2SupportTransactionsTransactionidPathParams;
};
