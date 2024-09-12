export type UpdateMerchantDepositPolicyRequestBody = {
    /**
     * @type number | undefined, double
     */
    honeyMoneyRate?: number;
    /**
     * @type number, double
     */
    minAmount?: number | null;
    /**
     * @type number, double
     */
    maxAmount?: number | null;
    /**
     * @type integer, int32
     */
    trafficThreadId?: number | null;
    /**
     * @type integer, int32
     */
    trafficCascadeId?: number | null;
    /**
     * @type number, double
     */
    minProfitRate?: number | null;
};
