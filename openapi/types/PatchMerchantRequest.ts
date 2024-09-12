export type PatchMerchantRequest = {
    /**
     * @type string
     */
    name?: string | null;
    /**
     * @type string
     */
    shopName?: string | null;
    /**
     * @type integer, int32
     */
    transactionExpirationTimeout?: number | null;
    /**
     * @type boolean
     */
    callbackIsEnabled?: boolean | null;
    /**
     * @type integer, int32
     */
    callbackClientType?: number | null;
    /**
     * @type string
     */
    callbackUrl?: string | null;
    /**
     * @type string
     */
    secretKey?: string | null;
    /**
     * @type string
     */
    successUrl?: string | null;
    /**
     * @type string
     */
    failureUrl?: string | null;
    /**
     * @type string
     */
    cancelUrl?: string | null;
    /**
     * @type string
     */
    withdrawalCommissions?: string | null;
};
