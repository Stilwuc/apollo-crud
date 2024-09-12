export type CreateAdminTeamDepositRequest = {
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    transactionHash?: string;
};
