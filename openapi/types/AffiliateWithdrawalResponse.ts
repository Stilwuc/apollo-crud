export type AffiliateWithdrawalResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    day?: string;
    /**
     * @type string | undefined
     */
    address?: string;
    /**
     * @type number | undefined, double
     */
    amountInUsdt?: number;
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type string
     */
    transactionHash?: string | null;
    /**
     * @type number, double
     */
    commission?: number | null;
};
