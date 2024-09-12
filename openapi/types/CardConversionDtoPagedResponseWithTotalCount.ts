import type { CardConversionDto } from "./CardConversionDto";

export type CardConversionDtoPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: CardConversionDto[];
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
