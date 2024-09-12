import type { MerchantShortInfo } from "./MerchantShortInfo";
import type { AffiliateShortInfo } from "./AffiliateShortInfo";
import type { CurrencyShortInfo } from "./CurrencyShortInfo";
import type { AffiliateFeeType } from "./AffiliateFeeType";

export type AffiliateMerchantPolicyResponseWithAffiliateElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    merchant?: MerchantShortInfo;
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
