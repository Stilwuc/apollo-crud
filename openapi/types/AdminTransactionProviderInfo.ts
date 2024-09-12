export type AdminTransactionProviderInfo = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    name?: string;
    /**
     * @type number | undefined, double
     */
    rate?: number;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type number | undefined, double
     */
    currencyRate?: number;
    /**
     * @type number, double
     */
    fee?: number | null;
};
