import type { TeamShortInfo } from "./TeamShortInfo";
import type { AffiliateShortInfo } from "./AffiliateShortInfo";
import type { CurrencyShortInfo } from "./CurrencyShortInfo";
import type { AffiliateFeeType } from "./AffiliateFeeType";

export type AffiliateTeamPolicyResponseWithAffiliateElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    team?: TeamShortInfo;
    affiliate?: AffiliateShortInfo;
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
