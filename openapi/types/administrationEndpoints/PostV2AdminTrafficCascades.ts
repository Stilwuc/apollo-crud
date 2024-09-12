import type { CreateTrafficThreadResult } from "../CreateTrafficThreadResult";
import type { CreateTrafficCascadeRequest } from "../CreateTrafficCascadeRequest";

/**
 * @description OK
 */
export type PostV2AdminTrafficCascades200 = CreateTrafficThreadResult;
export type PostV2AdminTrafficCascadesMutationRequest =
    CreateTrafficCascadeRequest;
/**
 * @description OK
 */
export type PostV2AdminTrafficCascadesMutationResponse =
    CreateTrafficThreadResult;
export type PostV2AdminTrafficCascadesMutation = {
    Response: PostV2AdminTrafficCascadesMutationResponse;
    Request: PostV2AdminTrafficCascadesMutationRequest;
};
