export type DefaultMerchantWithdrawalPolicyModel = {
    /**
     * @type number | undefined, double
     */
    rate?: number;
    /**
     * @type number | undefined, double
     */
    minProfitRate?: number;
    /**
     * @type number | undefined, double
     */
    minAmount?: number;
    /**
     * @type number | undefined, double
     */
    maxAmount?: number;
    /**
     * @type integer, int32
     */
    trafficThreadId?: number | null;
    /**
     * @type integer, int64
     */
    trafficCascadeId?: number | null;
};
