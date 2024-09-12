export type AffiliateStatusResponseDto = {
    /**
     * @type number | undefined, double
     */
    balance?: number;
    /**
     * @type object | undefined
     */
    withdrawalCommissions?: {
        [key: string]: number;
    };
};
