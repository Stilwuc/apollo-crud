import type { TransactionCallbackResponseElementPagedResponseWithTotalCount } from "../TransactionCallbackResponseElementPagedResponseWithTotalCount";

export type GetV2AdminTransactionCallbacksQueryParams = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type integer | undefined, int64
     */
    transactionId?: number;
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type string | undefined, uuid
     */
    merchantId?: string;
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
export type GetV2AdminTransactionCallbacks200 =
    TransactionCallbackResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminTransactionCallbacksQueryResponse =
    TransactionCallbackResponseElementPagedResponseWithTotalCount;
export type GetV2AdminTransactionCallbacksQuery = {
    Response: GetV2AdminTransactionCallbacksQueryResponse;
    QueryParams: GetV2AdminTransactionCallbacksQueryParams;
};
