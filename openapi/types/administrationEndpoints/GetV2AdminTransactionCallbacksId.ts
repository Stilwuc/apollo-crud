import type { TransactionCallbackInfoResponse } from "../TransactionCallbackInfoResponse";

export type GetV2AdminTransactionCallbacksIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminTransactionCallbacksId200 =
    TransactionCallbackInfoResponse;
/**
 * @description OK
 */
export type GetV2AdminTransactionCallbacksIdQueryResponse =
    TransactionCallbackInfoResponse;
export type GetV2AdminTransactionCallbacksIdQuery = {
    Response: GetV2AdminTransactionCallbacksIdQueryResponse;
    PathParams: GetV2AdminTransactionCallbacksIdPathParams;
};
