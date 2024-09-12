import type { TeamBankAccountDto } from "./TeamBankAccountDto";

export type TeamBankAccountDtoPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: TeamBankAccountDto[];
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
