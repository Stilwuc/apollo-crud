export type PreCreateDepositTransactionRequest = {
    /**
     * @type string
     */
    extTransactionId?: string | null;
    /**
     * @type string
     */
    callbackUrl?: string | null;
    /**
     * @type string | undefined
     */
    currency?: string;
};
