import type { TeamWithdrawalPolicyCurrencyResponse } from "./TeamWithdrawalPolicyCurrencyResponse";

export type TeamWithdrawalPolicyResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
    currency?: TeamWithdrawalPolicyCurrencyResponse;
    /**
     * @type number | undefined, double
     */
    rate?: number;
    /**
     * @type number | undefined, double
     */
    withdrawalLimit?: number;
    /**
     * @type number | undefined, double
     */
    currentWithdrawalTurnover?: number;
    /**
     * @type number | undefined, double
     */
    minAmount?: number;
    /**
     * @type number | undefined, double
     */
    maxAmount?: number;
};
