import type { PaymentProviderDepositPolicyCurrencyDto } from "./PaymentProviderDepositPolicyCurrencyDto";

export type PaymentProviderDepositPolicyInfoDto = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    currency?: PaymentProviderDepositPolicyCurrencyDto;
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
};
