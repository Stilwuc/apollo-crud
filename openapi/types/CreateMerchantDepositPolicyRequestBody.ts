export type CreateMerchantDepositPolicyRequestBody = {
    /**
     * @type string | undefined, uuid
     */
    currencyId?: string;
    /**
     * @type integer, int32
     */
    trafficThreadId?: number | null;
    /**
     * @type integer, int32
     */
    trafficCascadeId?: number | null;
    /**
     * @type number | undefined, double
     */
    honeyMoneyRate?: number;
    /**
     * @type number | undefined, double
     */
    minAmount?: number;
    /**
     * @type number | undefined, double
     */
    maxAmount?: number;
    /**
     * @type number | undefined, double
     */
    minProfitRate?: number;
};
