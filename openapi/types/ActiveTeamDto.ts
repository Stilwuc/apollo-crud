import type { TeamShortInfo } from "./TeamShortInfo";
import type { BalanceShortInfo } from "./BalanceShortInfo";
import type { ThreadDto } from "./ThreadDto";

export type ActiveTeamDto = {
    team?: TeamShortInfo;
    /**
     * @type number | undefined, double
     */
    minAmount?: number;
    /**
     * @type number | undefined, double
     */
    maxAmount?: number;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type integer | undefined, int32
     */
    rateDownScale?: number;
    /**
     * @type integer | undefined, int32
     */
    totalAccounts?: number;
    /**
     * @type integer | undefined, int32
     */
    totalCards?: number;
    /**
     * @type integer | undefined, int32
     */
    totalSBP?: number;
    balance?: BalanceShortInfo;
    /**
     * @type array | undefined
     */
    threads?: ThreadDto[];
};
