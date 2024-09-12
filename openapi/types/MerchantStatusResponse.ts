export type MerchantStatusResponse = {
    /**
     * @type number | undefined, double
     */
    turnOverTotalUsdt?: number;
    /**
     * @type object | undefined
     */
    turnOverByCurrency?: {
        [key: string]: number;
    };
    /**
     * @type number | undefined, double
     */
    averageRate?: number;
    /**
     * @type number | undefined, double
     */
    availableBalanceUsdt?: number;
    /**
     * @type number | undefined, double
     */
    pendingBalanceUsdt?: number;
    /**
     * @type number | undefined, double
     */
    disputeBalanceUsdt?: number;
    /**
     * @type object | undefined
     */
    currencyRates?: {
        [key: string]: number;
    };
    /**
     * @type object | undefined
     */
    withdrawalCommissions?: {
        [key: string]: number;
    };
};
