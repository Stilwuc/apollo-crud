export type CreateTransactionAdminRequestBody = {
    /**
     * @type string | undefined, uuid
     */
    merchantId?: string;
    /**
     * @type string | undefined, uuid
     */
    cardId?: string;
    /**
     * @type string | undefined
     */
    callbackUrl?: string;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type number | undefined, double
     */
    amount?: number;
};
