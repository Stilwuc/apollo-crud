import type { TrafficThread } from "../TrafficThread";
import type { UpdateTrafficThread } from "../UpdateTrafficThread";

export type PatchV2AdminTrafficThreadsTrafficthreadidPathParams = {
    /**
     * @type integer, int32
     */
    trafficThreadId: number;
};
/**
 * @description OK
 */
export type PatchV2AdminTrafficThreadsTrafficthreadid200 = TrafficThread;
export type PatchV2AdminTrafficThreadsTrafficthreadidMutationRequest =
    UpdateTrafficThread;
/**
 * @description OK
 */
export type PatchV2AdminTrafficThreadsTrafficthreadidMutationResponse =
    TrafficThread;
export type PatchV2AdminTrafficThreadsTrafficthreadidMutation = {
    Response: PatchV2AdminTrafficThreadsTrafficthreadidMutationResponse;
    Request: PatchV2AdminTrafficThreadsTrafficthreadidMutationRequest;
    PathParams: PatchV2AdminTrafficThreadsTrafficthreadidPathParams;
};
