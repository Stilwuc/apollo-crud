export type UpdateMerchantWithdrawalPolicyRequestBody = {
    /**
     * @type integer | undefined, int32
     */
    trafficThreadId?: number;
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
