import type { BankWithCurrencyDto } from "./BankWithCurrencyDto";

export type BankWithCurrencyDtoPagedResponse = {
    /**
     * @type array | undefined
     */
    items?: BankWithCurrencyDto[];
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
