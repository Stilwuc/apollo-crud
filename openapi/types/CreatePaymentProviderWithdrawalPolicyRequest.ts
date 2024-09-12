export type CreatePaymentProviderWithdrawalPolicyRequest = {
    /**
     * @type string | undefined, uuid
     */
    currencyId?: string;
    /**
     * @type number | undefined, double
     */
    minAmount?: number;
    /**
     * @type number | undefined, double
     */
    maxAmount?: number;
};
