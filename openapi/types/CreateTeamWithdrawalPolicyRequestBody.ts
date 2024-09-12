export type CreateTeamWithdrawalPolicyRequestBody = {
    /**
     * @type number | undefined, double
     */
    withdrawalLimit?: number;
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
