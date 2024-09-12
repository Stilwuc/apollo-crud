export type DailyTurnoverDto = {
    /**
     * @type string | undefined, date-time
     */
    day?: string;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type integer | undefined, int64
     */
    transactionCount?: number;
    /**
     * @type number | undefined, double
     */
    turnover?: number;
    /**
     * @type number | undefined, double
     */
    turnoverInUsdt?: number;
    /**
     * @type number | undefined, double
     */
    profitInUsdt?: number;
};
