export type WithdrawalHistoryDto = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined, date-time
     */
    date?: string;
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type number, double
     */
    commission?: number | null;
    /**
     * @type string
     */
    transactionHash?: string | null;
    /**
     * @type string
     */
    address?: string | null;
};
