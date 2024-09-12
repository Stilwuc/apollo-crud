export type CreateTeamDepositPolicyRequest = {
    /**
     * @type string | undefined, uuid
     */
    currencyId?: string;
    /**
     * @type number | undefined, double
     */
    rate?: number;
    /**
     * @type number, double
     */
    dailyAmountLimit?: number | null;
    /**
     * @type integer | undefined, int32
     */
    paymentLimit?: number;
    /**
     * @type number | undefined, double
     */
    minAmount?: number;
    /**
     * @type number | undefined, double
     */
    maxAmount?: number;
};
