export type CreateSbpTransactionMerchantRequestBody = {
    /**
     * @type string
     */
    extId?: string | null;
    /**
     * @type string
     */
    callbackUrl?: string | null;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string
     */
    bank?: string | null;
};
