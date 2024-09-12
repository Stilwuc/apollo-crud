import type { AdminTransactionInfoResponse } from "../AdminTransactionInfoResponse";

export type GetV2AdminTransactionsIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminTransactionsId200 = AdminTransactionInfoResponse;
/**
 * @description OK
 */
export type GetV2AdminTransactionsIdQueryResponse =
    AdminTransactionInfoResponse;
export type GetV2AdminTransactionsIdQuery = {
    Response: GetV2AdminTransactionsIdQueryResponse;
    PathParams: GetV2AdminTransactionsIdPathParams;
};
