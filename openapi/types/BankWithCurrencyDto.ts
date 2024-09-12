import type { CurrencyDto } from "./CurrencyDto";

export type BankWithCurrencyDto = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    name?: string;
    /**
     * @type boolean | undefined
     */
    isDeleted?: boolean;
    currency?: CurrencyDto;
};
