export type CreateMerchantResponse = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
    /**
     * @type string | undefined
     */
    name?: string;
    /**
     * @type number | undefined, double
     */
    balance?: number;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
};
