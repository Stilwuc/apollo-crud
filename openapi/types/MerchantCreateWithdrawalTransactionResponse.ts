export type MerchantCreateWithdrawalTransactionResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type number | undefined, double
     */
    amountInUsdt?: number;
    /**
     * @type number | undefined, double
     */
    commissionInUsdt?: number;
    /**
     * @type number | undefined, double
     */
    totalAmountInUsdt?: number;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type number | undefined, double
     */
    currencyRate?: number;
};
