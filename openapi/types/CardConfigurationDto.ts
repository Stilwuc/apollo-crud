export type CardConfigurationDto = {
    /**
     * @type integer | undefined, int32
     */
    transactionCountPerInterval?: number;
    /**
     * @type integer | undefined, int32
     */
    intervalInMinutes?: number;
    /**
     * @type number | undefined, double
     */
    dailyLimit?: number;
};
