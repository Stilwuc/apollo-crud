import type { MerchantShortInfo } from "./MerchantShortInfo";
import type { CurrencyShortInfo } from "./CurrencyShortInfo";
import type { AffiliateShortInfo } from "./AffiliateShortInfo";

export type AffiliateMerchantReportResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    day?: string;
    merchant?: MerchantShortInfo;
    currency?: CurrencyShortInfo;
    affiliate?: AffiliateShortInfo;
    /**
     * @type number | undefined, double
     */
    amountInUsdt?: number;
};
