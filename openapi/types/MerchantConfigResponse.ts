export type MerchantConfigResponse = {
    /**
     * @type string
     */
    callbackUrl?: string | null;
    /**
     * @type boolean | undefined
     */
    callbacksAreEnabled?: boolean;
    /**
     * @type string
     */
    appellationUrl?: string | null;
    /**
     * @type string
     */
    shopName?: string | null;
    /**
     * @type string
     */
    failUrl?: string | null;
    /**
     * @type string
     */
    successUrl?: string | null;
};
