import type { TeamDepositResponseDto } from "./TeamDepositResponseDto";

export type TeamDepositResponseDtoPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: TeamDepositResponseDto[];
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
