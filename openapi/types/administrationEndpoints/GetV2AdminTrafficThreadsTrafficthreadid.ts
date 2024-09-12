import type { TrafficThread } from "../TrafficThread";

export type GetV2AdminTrafficThreadsTrafficthreadidPathParams = {
    /**
     * @type integer, int32
     */
    trafficThreadId: number;
};
/**
 * @description OK
 */
export type GetV2AdminTrafficThreadsTrafficthreadid200 = TrafficThread;
/**
 * @description OK
 */
export type GetV2AdminTrafficThreadsTrafficthreadidQueryResponse =
    TrafficThread;
export type GetV2AdminTrafficThreadsTrafficthreadidQuery = {
    Response: GetV2AdminTrafficThreadsTrafficthreadidQueryResponse;
    PathParams: GetV2AdminTrafficThreadsTrafficthreadidPathParams;
};
