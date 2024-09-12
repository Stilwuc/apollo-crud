import type { AdminCreateBankResponse } from "../AdminCreateBankResponse";
import type { AdminCreateBankRequest } from "../AdminCreateBankRequest";

/**
 * @description OK
 */
export type PostV2AdminBanks200 = AdminCreateBankResponse;
export type PostV2AdminBanksMutationRequest = AdminCreateBankRequest;
/**
 * @description OK
 */
export type PostV2AdminBanksMutationResponse = AdminCreateBankResponse;
export type PostV2AdminBanksMutation = {
    Response: PostV2AdminBanksMutationResponse;
    Request: PostV2AdminBanksMutationRequest;
};
