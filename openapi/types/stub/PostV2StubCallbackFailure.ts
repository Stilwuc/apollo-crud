import type { StandardCallbackResponse } from "../StandardCallbackResponse";
import type { StandardCallbackRequest } from "../StandardCallbackRequest";

/**
 * @description OK
 */
export type PostV2StubCallbackFailure200 = StandardCallbackResponse;
export type PostV2StubCallbackFailureMutationRequest = StandardCallbackRequest;
/**
 * @description OK
 */
export type PostV2StubCallbackFailureMutationResponse =
    StandardCallbackResponse;
export type PostV2StubCallbackFailureMutation = {
    Response: PostV2StubCallbackFailureMutationResponse;
    Request: PostV2StubCallbackFailureMutationRequest;
};
