import type { MerchantBalanceTransactionsResponsePagedResponseWithTotalCount } from "../MerchantBalanceTransactionsResponsePagedResponseWithTotalCount";

export type GetV2AdminMerchantsIdBalanceTransactionsPathParams = {
    /**
     * @type string, uuid
     */
    id: string;
};
export type GetV2AdminMerchantsIdBalanceTransactionsQueryParams = {
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
export type GetV2AdminMerchantsIdBalanceTransactions200 =
    MerchantBalanceTransactionsResponsePagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminMerchantsIdBalanceTransactionsQueryResponse =
    MerchantBalanceTransactionsResponsePagedResponseWithTotalCount;
export type GetV2AdminMerchantsIdBalanceTransactionsQuery = {
    Response: GetV2AdminMerchantsIdBalanceTransactionsQueryResponse;
    PathParams: GetV2AdminMerchantsIdBalanceTransactionsPathParams;
    QueryParams: GetV2AdminMerchantsIdBalanceTransactionsQueryParams;
};
