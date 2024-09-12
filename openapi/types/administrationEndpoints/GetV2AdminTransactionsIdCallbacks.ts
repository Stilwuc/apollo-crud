import type { AdminTransactionCallbackInfoResponse } from "../AdminTransactionCallbackInfoResponse";

export type GetV2AdminTransactionsIdCallbacksPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminTransactionsIdCallbacks200 =
    AdminTransactionCallbackInfoResponse[];
/**
 * @description OK
 */
export type GetV2AdminTransactionsIdCallbacksQueryResponse =
    AdminTransactionCallbackInfoResponse[];
export type GetV2AdminTransactionsIdCallbacksQuery = {
    Response: GetV2AdminTransactionsIdCallbacksQueryResponse;
    PathParams: GetV2AdminTransactionsIdCallbacksPathParams;
};
