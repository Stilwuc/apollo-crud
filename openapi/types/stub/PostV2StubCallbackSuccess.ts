import type { StandardCallbackResponse } from "../StandardCallbackResponse";
import type { StandardCallbackRequest } from "../StandardCallbackRequest";

/**
 * @description OK
 */
export type PostV2StubCallbackSuccess200 = StandardCallbackResponse;
export type PostV2StubCallbackSuccessMutationRequest = StandardCallbackRequest;
/**
 * @description OK
 */
export type PostV2StubCallbackSuccessMutationResponse =
    StandardCallbackResponse;
export type PostV2StubCallbackSuccessMutation = {
    Response: PostV2StubCallbackSuccessMutationResponse;
    Request: PostV2StubCallbackSuccessMutationRequest;
};
