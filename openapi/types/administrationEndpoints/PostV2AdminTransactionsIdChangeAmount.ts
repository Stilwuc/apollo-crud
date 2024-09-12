import type { ChangeTransactionAmountAdminRequest } from "../ChangeTransactionAmountAdminRequest";

export type PostV2AdminTransactionsIdChangeAmountPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type PostV2AdminTransactionsIdChangeAmount200 = unknown;
export type PostV2AdminTransactionsIdChangeAmountMutationRequest =
    ChangeTransactionAmountAdminRequest;
export type PostV2AdminTransactionsIdChangeAmountMutationResponse = unknown;
export type PostV2AdminTransactionsIdChangeAmountMutation = {
    Response: PostV2AdminTransactionsIdChangeAmountMutationResponse;
    Request: PostV2AdminTransactionsIdChangeAmountMutationRequest;
    PathParams: PostV2AdminTransactionsIdChangeAmountPathParams;
};
