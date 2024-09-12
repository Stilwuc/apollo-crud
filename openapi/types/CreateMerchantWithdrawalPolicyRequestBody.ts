export type CreateMerchantWithdrawalPolicyRequestBody = {
    /**
     * @type integer, int32
     */
    trafficThreadId?: number | null;
    /**
     * @type string | undefined, uuid
     */
    currencyId?: string;
    /**
     * @type number | undefined, double
     */
    rate?: number;
    /**
     * @type number | undefined, double
     */
    minAmount?: number;
    /**
     * @type number | undefined, double
     */
    maxAmount?: number;
};
