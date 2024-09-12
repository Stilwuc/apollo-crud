export type CreateAdminMerchantDepositRequest = {
    /**
     * @type string | undefined, uuid
     */
    merchantId?: string;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    transactionHash?: string;
};
