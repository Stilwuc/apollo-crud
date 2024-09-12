import type { CreateBankAccountResponse } from "../CreateBankAccountResponse";
import type { CreateBankAccountRequest } from "../CreateBankAccountRequest";

/**
 * @description Created
 */
export type PostV2TeamBankAccounts201 = CreateBankAccountResponse;
export type PostV2TeamBankAccountsMutationRequest = CreateBankAccountRequest;
/**
 * @description Created
 */
export type PostV2TeamBankAccountsMutationResponse = CreateBankAccountResponse;
export type PostV2TeamBankAccountsMutation = {
    Response: PostV2TeamBankAccountsMutationResponse;
    Request: PostV2TeamBankAccountsMutationRequest;
};
