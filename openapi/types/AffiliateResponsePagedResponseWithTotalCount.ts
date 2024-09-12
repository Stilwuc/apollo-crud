import type { AffiliateResponse } from "./AffiliateResponse";

export type AffiliateResponsePagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: AffiliateResponse[];
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
