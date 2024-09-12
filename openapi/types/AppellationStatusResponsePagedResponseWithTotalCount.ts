import type { AppellationStatusResponse } from "./AppellationStatusResponse";

export type AppellationStatusResponsePagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: AppellationStatusResponse[];
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
