import type { AffiliateShortInfo } from "./AffiliateShortInfo";
import type { TeamShortInfo } from "./TeamShortInfo";
import type { CurrencyShortInfo } from "./CurrencyShortInfo";
import type { AffiliateFeeType } from "./AffiliateFeeType";

export type AffiliateTeamPolicyResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    affiliate?: AffiliateShortInfo;
    team?: TeamShortInfo;
    currency?: CurrencyShortInfo;
    inType?: AffiliateFeeType;
    /**
     * @type number | undefined, double
     */
    inValue?: number;
    outType?: AffiliateFeeType;
    /**
     * @type number | undefined, double
     */
    outValue?: number;
};
