export type CreateDepositTransactionWithCardResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    cardNumber?: string;
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
    /**
     * @type string | undefined, date-time
     */
    expiresAt?: string;
    /**
     * @type string
     */
    owner?: string | null;
    /**
     * @type string
     */
    bankName?: string | null;
    /**
     * @type string | undefined
     */
    paymentMethod?: string;
};
