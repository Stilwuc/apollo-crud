import type { TeamDepositPolicyCurrencyResponse } from "./TeamDepositPolicyCurrencyResponse";

export type TeamDepositPolicyResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    currency?: TeamDepositPolicyCurrencyResponse;
    /**
     * @type number | undefined, double
     */
    rate?: number;
    /**
     * @type number, double
     */
    dailyAmountLimit?: number | null;
    /**
     * @type integer | undefined, int32
     */
    paymentLimit?: number;
    /**
     * @type number | undefined, double
     */
    minAmount?: number;
    /**
     * @type number | undefined, double
     */
    maxAmount?: number;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
    /**
     * @type integer | undefined, int32
     */
    rateDownScale?: number;
};
