import type { BankAccountDto } from "./BankAccountDto";

export type BankAccountDtoPagedResponse = {
    /**
     * @type array | undefined
     */
    items?: BankAccountDto[];
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
