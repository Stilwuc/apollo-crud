export type CreateDepositTransactionGetPaymentPageResponse = {
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
     * @type string | undefined
     */
    paymentPageUrl?: string;
    /**
     * @type string
     */
    bankName?: string | null;
    /**
     * @type number | undefined, double
     */
    commissionInUsdt?: number;
    /**
     * @type number | undefined, double
     */
    totalAmountInUsdt?: number;
};
