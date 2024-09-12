import type { TrafficThread } from "../TrafficThread";
import type { CreateTrafficThreadCommand } from "../CreateTrafficThreadCommand";

/**
 * @description OK
 */
export type PostV2AdminTrafficThreads200 = TrafficThread;
export type PostV2AdminTrafficThreadsMutationRequest =
    CreateTrafficThreadCommand;
/**
 * @description OK
 */
export type PostV2AdminTrafficThreadsMutationResponse = TrafficThread;
export type PostV2AdminTrafficThreadsMutation = {
    Response: PostV2AdminTrafficThreadsMutationResponse;
    Request: PostV2AdminTrafficThreadsMutationRequest;
};
