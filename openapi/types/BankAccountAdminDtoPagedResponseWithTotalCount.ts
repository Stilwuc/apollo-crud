import type { BankAccountAdminDto } from "./BankAccountAdminDto";

export type BankAccountAdminDtoPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: BankAccountAdminDto[];
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
