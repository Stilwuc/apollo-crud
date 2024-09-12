import type { UpdateTrafficCascadeResult } from "../UpdateTrafficCascadeResult";
import type { UpdateTrafficCascadeRequest } from "../UpdateTrafficCascadeRequest";

export type PatchV2AdminTrafficCascadesIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type PatchV2AdminTrafficCascadesId200 = UpdateTrafficCascadeResult;
export type PatchV2AdminTrafficCascadesIdMutationRequest =
    UpdateTrafficCascadeRequest;
/**
 * @description OK
 */
export type PatchV2AdminTrafficCascadesIdMutationResponse =
    UpdateTrafficCascadeResult;
export type PatchV2AdminTrafficCascadesIdMutation = {
    Response: PatchV2AdminTrafficCascadesIdMutationResponse;
    Request: PatchV2AdminTrafficCascadesIdMutationRequest;
    PathParams: PatchV2AdminTrafficCascadesIdPathParams;
};
