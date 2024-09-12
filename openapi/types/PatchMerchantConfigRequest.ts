export type PatchMerchantConfigRequest = {
    /**
     * @type string
     */
    callbackUrl?: string | null;
    /**
     * @type boolean
     */
    callbacksAreEnabled?: boolean | null;
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
