import type { TeamShortInfo } from "./TeamShortInfo";
import type { CurrencyShortInfo } from "./CurrencyShortInfo";
import type { AffiliateShortInfo } from "./AffiliateShortInfo";

export type AffiliateTeamReportResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    day?: string;
    team?: TeamShortInfo;
    currency?: CurrencyShortInfo;
    /**
     * @type number | undefined, double
     */
    amountInUsdt?: number;
    affiliate?: AffiliateShortInfo;
};
