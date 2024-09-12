import type { AdminTransactionResponsePagedResponse } from "../AdminTransactionResponsePagedResponse";

export type GetV2AdminTransactionsQueryParams = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    extId?: string;
    /**
     * @type string | undefined
     */
    type?: string;
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
    /**
     * @type string | undefined, uuid
     */
    merchantId?: string;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    paymentMethod?: string;
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type string | undefined
     */
    sortBy?: string;
};
/**
 * @description OK
 */
export type GetV2AdminTransactions200 = AdminTransactionResponsePagedResponse;
/**
 * @description OK
 */
export type GetV2AdminTransactionsQueryResponse =
    AdminTransactionResponsePagedResponse;
export type GetV2AdminTransactionsQuery = {
    Response: GetV2AdminTransactionsQueryResponse;
    QueryParams: GetV2AdminTransactionsQueryParams;
};
