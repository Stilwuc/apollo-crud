import type { CreateMerchantResponse } from "../CreateMerchantResponse";
import type { CreateMerchantRequest } from "../CreateMerchantRequest";

/**
 * @description OK
 */
export type PostV2AdminMerchants200 = CreateMerchantResponse;
export type PostV2AdminMerchantsMutationRequest = CreateMerchantRequest;
/**
 * @description OK
 */
export type PostV2AdminMerchantsMutationResponse = CreateMerchantResponse;
export type PostV2AdminMerchantsMutation = {
    Response: PostV2AdminMerchantsMutationResponse;
    Request: PostV2AdminMerchantsMutationRequest;
};
