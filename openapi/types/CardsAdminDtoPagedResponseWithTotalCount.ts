import type { CardsAdminDto } from "./CardsAdminDto";

export type CardsAdminDtoPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: CardsAdminDto[];
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
