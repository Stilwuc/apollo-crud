import type { PaymentProviderConfigurationDto } from "./PaymentProviderConfigurationDto";

export type UpdatePaymentProviderRequest = {
    /**
     * @type string | undefined
     */
    name?: string;
    configuration?: PaymentProviderConfigurationDto;
    /**
     * @type object | undefined
     */
    authData?: {
        [key: string]: string;
    };
    /**
     * @type object | undefined
     */
    options?: {
        [key: string]: string;
    };
};
