import type { TeamElement } from "./TeamElement";

export type DailyTurnoverTeamData = {
    team?: TeamElement;
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
