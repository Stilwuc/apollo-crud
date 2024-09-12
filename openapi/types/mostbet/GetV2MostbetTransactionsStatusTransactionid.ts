import type { MostbetTransactionStatusResponse } from "../MostbetTransactionStatusResponse";

export type GetV2MostbetTransactionsStatusTransactionidPathParams = {
    /**
     * @type integer, int64
     */
    transactionId: number;
};
/**
 * @description Success
 */
export type GetV2MostbetTransactionsStatusTransactionid200 =
    MostbetTransactionStatusResponse;
/**
 * @description Success
 */
export type GetV2MostbetTransactionsStatusTransactionidQueryResponse =
    MostbetTransactionStatusResponse;
export type GetV2MostbetTransactionsStatusTransactionidQuery = {
    Response: GetV2MostbetTransactionsStatusTransactionidQueryResponse;
    PathParams: GetV2MostbetTransactionsStatusTransactionidPathParams;
};
