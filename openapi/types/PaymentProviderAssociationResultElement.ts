import type { PaymentProviderResultElement } from "./PaymentProviderResultElement";

export type PaymentProviderAssociationResultElement = {
    paymentProvider?: PaymentProviderResultElement;
    /**
     * @type number, double
     */
    rate?: number | null;
    /**
     * @type integer | undefined, int32
     */
    weight?: number;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
};
