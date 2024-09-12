import type { TrafficCascadeResultElement } from "./TrafficCascadeResultElement";

export type TrafficCascadeResultElementPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: TrafficCascadeResultElement[];
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type integer | undefined, int32
     */
    totalCount?: number;
    /**
     * @type integer | undefined, int32
     */
    readonly pageCount?: number;
};
