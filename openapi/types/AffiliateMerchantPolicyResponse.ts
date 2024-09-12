import type { AffiliateShortInfo } from "./AffiliateShortInfo";
import type { MerchantShortInfo } from "./MerchantShortInfo";
import type { CurrencyShortInfo } from "./CurrencyShortInfo";
import type { AffiliateFeeType } from "./AffiliateFeeType";

export type AffiliateMerchantPolicyResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    affiliate?: AffiliateShortInfo;
    merchant?: MerchantShortInfo;
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
