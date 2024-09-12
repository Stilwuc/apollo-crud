import type { TrafficCascadeResultElement } from "../TrafficCascadeResultElement";

export type GetV2AdminTrafficCascadesIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminTrafficCascadesId200 = TrafficCascadeResultElement;
/**
 * @description OK
 */
export type GetV2AdminTrafficCascadesIdQueryResponse =
    TrafficCascadeResultElement;
export type GetV2AdminTrafficCascadesIdQuery = {
    Response: GetV2AdminTrafficCascadesIdQueryResponse;
    PathParams: GetV2AdminTrafficCascadesIdPathParams;
};
