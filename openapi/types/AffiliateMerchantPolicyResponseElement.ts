import type { AffiliateFeeType } from "./AffiliateFeeType";

export type AffiliateMerchantPolicyResponseElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    merchantName?: string;
    /**
     * @type string | undefined
     */
    currencyName?: string;
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
