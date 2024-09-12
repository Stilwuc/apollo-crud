export type WithdrawRequestDto = {
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    address?: string;
    /**
     * @type string
     */
    extId?: string | null;
    /**
     * @type string
     */
    currency?: string | null;
};
