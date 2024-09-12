import type { CreateTransactionResponse } from "../CreateTransactionResponse";
import type { CreateTransactionAdminRequestBody } from "../CreateTransactionAdminRequestBody";

/**
 * @description OK
 */
export type PostV2AdminTransactions200 = CreateTransactionResponse;
export type PostV2AdminTransactionsMutationRequest =
    CreateTransactionAdminRequestBody;
/**
 * @description OK
 */
export type PostV2AdminTransactionsMutationResponse = CreateTransactionResponse;
export type PostV2AdminTransactionsMutation = {
    Response: PostV2AdminTransactionsMutationResponse;
    Request: PostV2AdminTransactionsMutationRequest;
};
