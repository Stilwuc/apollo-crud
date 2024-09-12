import type { AppellationResponse } from "./AppellationResponse";

export type AppellationResponsePagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: AppellationResponse[];
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
