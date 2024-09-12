import type { MerchantTransactionResponseElementPagedResponse } from "../MerchantTransactionResponseElementPagedResponse";

export type GetV2MerchantTransactionsQueryParams = {
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
export type GetV2MerchantTransactions200 =
    MerchantTransactionResponseElementPagedResponse;
/**
 * @description OK
 */
export type GetV2MerchantTransactionsQueryResponse =
    MerchantTransactionResponseElementPagedResponse;
export type GetV2MerchantTransactionsQuery = {
    Response: GetV2MerchantTransactionsQueryResponse;
    QueryParams: GetV2MerchantTransactionsQueryParams;
};
