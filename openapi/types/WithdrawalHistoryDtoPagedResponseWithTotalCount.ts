import type { WithdrawalHistoryDto } from "./WithdrawalHistoryDto";

export type WithdrawalHistoryDtoPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: WithdrawalHistoryDto[];
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
