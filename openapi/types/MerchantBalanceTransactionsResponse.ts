export type MerchantBalanceTransactionsResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    type?: string;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string
     */
    hash?: string | null;
    /**
     * @type string | undefined
     */
    status?: string;
};
