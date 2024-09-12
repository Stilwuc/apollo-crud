import type { GetMerchantTransactionByIdResponse } from "../GetMerchantTransactionByIdResponse";

export type GetV2MerchantTransactionsIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2MerchantTransactionsId200 = GetMerchantTransactionByIdResponse;
/**
 * @description OK
 */
export type GetV2MerchantTransactionsIdQueryResponse =
    GetMerchantTransactionByIdResponse;
export type GetV2MerchantTransactionsIdQuery = {
    Response: GetV2MerchantTransactionsIdQueryResponse;
    PathParams: GetV2MerchantTransactionsIdPathParams;
};
