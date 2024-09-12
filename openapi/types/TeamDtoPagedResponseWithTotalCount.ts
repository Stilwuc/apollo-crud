import type { TeamDto } from "./TeamDto";

export type TeamDtoPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: TeamDto[];
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
