export type UpdateAdminTeamDepositPolicyRequest = {
    /**
     * @type number, double
     */
    rate?: number | null;
    /**
     * @type number, double
     */
    dailyAmountLimit?: number | null;
    /**
     * @type integer, int32
     */
    paymentLimit?: number | null;
    /**
     * @type number, double
     */
    minAmount?: number | null;
    /**
     * @type number, double
     */
    maxAmount?: number | null;
};
