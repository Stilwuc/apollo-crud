export type AdminTransactionInfoMerchantInfo = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
    /**
     * @type string | undefined
     */
    name?: string;
    /**
     * @type number, double
     */
    commissionInUsdt?: number | null;
    /**
     * @type number | undefined, double
     */
    rate?: number;
    /**
     * @type number | undefined, double
     */
    currencyRate?: number;
    /**
     * @type number | undefined, double
     */
    amountInUsdt?: number;
};
