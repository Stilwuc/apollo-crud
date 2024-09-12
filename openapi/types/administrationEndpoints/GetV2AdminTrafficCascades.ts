import type { TrafficCascadeResultElementPagedResponseWithTotalCount } from "../TrafficCascadeResultElementPagedResponseWithTotalCount";

export type GetV2AdminTrafficCascadesQueryParams = {
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
/**
 * @description OK
 */
export type GetV2AdminTrafficCascades200 =
    TrafficCascadeResultElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminTrafficCascadesQueryResponse =
    TrafficCascadeResultElementPagedResponseWithTotalCount;
export type GetV2AdminTrafficCascadesQuery = {
    Response: GetV2AdminTrafficCascadesQueryResponse;
    QueryParams: GetV2AdminTrafficCascadesQueryParams;
};
