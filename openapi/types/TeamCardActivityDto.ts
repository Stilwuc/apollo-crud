export type TeamCardActivityDto = {
    /**
     * @type integer | undefined, int64
     */
    pendingTransactionCount?: number;
    /**
     * @type integer | undefined, int64
     */
    successfulTransactionCount?: number;
    /**
     * @type integer | undefined, int64
     */
    declinedTransactionCount?: number;
    /**
     * @type number | undefined, double
     */
    amount?: number;
};
