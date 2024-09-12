import type { TransactionChangeInfo } from "../TransactionChangeInfo";

export type GetV2AdminTransactionsIdChangesPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminTransactionsIdChanges200 = TransactionChangeInfo[];
/**
 * @description OK
 */
export type GetV2AdminTransactionsIdChangesQueryResponse =
    TransactionChangeInfo[];
export type GetV2AdminTransactionsIdChangesQuery = {
    Response: GetV2AdminTransactionsIdChangesQueryResponse;
    PathParams: GetV2AdminTransactionsIdChangesPathParams;
};
