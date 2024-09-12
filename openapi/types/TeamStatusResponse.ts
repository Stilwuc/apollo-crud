export type TeamStatusResponse = {
    /**
     * @type boolean | undefined
     */
    online?: boolean;
    /**
     * @type number | undefined, double
     */
    balanceUsdt?: number;
    /**
     * @type number | undefined, double
     */
    pendingBalanceUsdt?: number;
    /**
     * @type number | undefined, double
     */
    disputeBalanceUsdt?: number;
    /**
     * @type number | undefined, double
     */
    insuranceBalance?: number;
    /**
     * @type integer | undefined, int32
     */
    insuranceBalanceReleaseDaysLeft?: number;
    /**
     * @type object | undefined
     */
    currencyRates?: {
        [key: string]: number;
    };
    /**
     * @type integer | undefined, int32
     */
    rateDownScale?: number;
    /**
     * @type object | undefined
     */
    withdrawalCommissions?: {
        [key: string]: number;
    };
};
