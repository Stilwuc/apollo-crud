import type { TeamWithdrawalPolicyCurrencyResult } from "./TeamWithdrawalPolicyCurrencyResult";

export type TeamWithdrawalPolicyResult = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
    currency?: TeamWithdrawalPolicyCurrencyResult;
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
