import type { MerchantDepositPolicyCurrencyResponseElement } from "./MerchantDepositPolicyCurrencyResponseElement";
import type { TrafficThreadResponseElement } from "./TrafficThreadResponseElement";
import type { TrafficCascadeResponseElement } from "./TrafficCascadeResponseElement";

export type MerchantDepositPolicyResponseElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined, uuid
     */
    merchantId?: string;
    currency?: MerchantDepositPolicyCurrencyResponseElement;
    /**
     * @type number | undefined, double
     */
    honeyMoneyRate?: number;
    /**
     * @type number | undefined, double
     */
    minAmount?: number;
    /**
     * @type number | undefined, double
     */
    maxAmount?: number;
    /**
     * @type number | undefined, double
     */
    minProfitRate?: number;
    trafficThread?: TrafficThreadResponseElement;
    trafficCascade?: TrafficCascadeResponseElement;
};
