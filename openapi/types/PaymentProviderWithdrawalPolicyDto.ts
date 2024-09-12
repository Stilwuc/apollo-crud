import type { WithdrawalPaymentProviderCurrencyElement } from "./WithdrawalPaymentProviderCurrencyElement";
import type { WithdrawalPaymentProviderElement } from "./WithdrawalPaymentProviderElement";

export type PaymentProviderWithdrawalPolicyDto = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    currency?: WithdrawalPaymentProviderCurrencyElement;
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
    paymentProvider?: WithdrawalPaymentProviderElement;
};
