import type { TransactionStatusResponseElement } from "../TransactionStatusResponseElement";

export type GetV2MerchantTransactionsStatusQueryParams = {
    /**
     * @type string
     */
    ids: string;
    /**
     * @default false
     * @type boolean | undefined
     */
    isExtId?: boolean;
};
/**
 * @description OK
 */
export type GetV2MerchantTransactionsStatus200 =
    TransactionStatusResponseElement[];
/**
 * @description OK
 */
export type GetV2MerchantTransactionsStatusQueryResponse =
    TransactionStatusResponseElement[];
export type GetV2MerchantTransactionsStatusQuery = {
    Response: GetV2MerchantTransactionsStatusQueryResponse;
    QueryParams: GetV2MerchantTransactionsStatusQueryParams;
};
