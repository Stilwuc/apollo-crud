export type DefaultTeamDepositPolicyModel = {
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
    /**
     * @type boolean
     */
    isEnabled?: boolean | null;
};
