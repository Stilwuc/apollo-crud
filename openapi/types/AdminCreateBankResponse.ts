import type { CurrencyDto } from "./CurrencyDto";

export type AdminCreateBankResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    name?: string;
    currency?: CurrencyDto;
};
