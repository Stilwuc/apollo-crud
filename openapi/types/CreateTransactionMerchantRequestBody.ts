export type CreateTransactionMerchantRequestBody = {
    /**
     * @type string | undefined
     */
    extId?: string;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    bank?: string;
    /**
     * @type string | undefined
     */
    callbackUrl?: string;
};
