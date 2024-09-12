import type { Void } from "../Void";
import type { StatisticsParametersRequest } from "../StatisticsParametersRequest";

/**
 * @description OK
 */
export type PostV2TeamStat200 = Void;
export type PostV2TeamStatMutationRequest = StatisticsParametersRequest;
/**
 * @description OK
 */
export type PostV2TeamStatMutationResponse = Void;
export type PostV2TeamStatMutation = {
    Response: PostV2TeamStatMutationResponse;
    Request: PostV2TeamStatMutationRequest;
};
