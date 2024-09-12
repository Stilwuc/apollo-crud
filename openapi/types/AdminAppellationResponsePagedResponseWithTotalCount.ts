import type { AdminAppellationResponse } from "./AdminAppellationResponse";

export type AdminAppellationResponsePagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: AdminAppellationResponse[];
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
