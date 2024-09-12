import type { MerchantWithdrawalPolicyCurrencyReponseElement } from "./MerchantWithdrawalPolicyCurrencyReponseElement";
import type { TrafficThreadElement } from "./TrafficThreadElement";

export type MerchantWithdrawalPolicyResponseElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    currency?: MerchantWithdrawalPolicyCurrencyReponseElement;
    /**
     * @type number | undefined, double
     */
    rate?: number;
    /**
     * @type number | undefined, double
     */
    minAmount?: number;
    /**
     * @type number | undefined, double
     */
    maxAmount?: number;
    trafficThread?: TrafficThreadElement;
};
