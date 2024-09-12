export type PaymentInfoRequest = {
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    hash?: string;
    /**
     * @type string | undefined
     */
    walletFrom?: string;
    /**
     * @type string | undefined
     */
    walletTo?: string;
};
