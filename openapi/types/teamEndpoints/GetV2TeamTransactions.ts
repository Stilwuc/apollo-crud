import type { TeamTransactionResponseElementPagedResponse } from "../TeamTransactionResponseElementPagedResponse";

export type GetV2TeamTransactionsQueryParams = {
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
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    cardNumber?: string;
    /**
     * @type number | undefined, double
     */
    originalAmount?: number;
    /**
     * @type string | undefined, date
     */
    createdAtFrom?: string;
    /**
     * @type string | undefined, date
     */
    createdAtTo?: string;
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
export type GetV2TeamTransactions200 =
    TeamTransactionResponseElementPagedResponse;
/**
 * @description OK
 */
export type GetV2TeamTransactionsQueryResponse =
    TeamTransactionResponseElementPagedResponse;
export type GetV2TeamTransactionsQuery = {
    Response: GetV2TeamTransactionsQueryResponse;
    QueryParams: GetV2TeamTransactionsQueryParams;
};
