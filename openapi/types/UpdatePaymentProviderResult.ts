import type { PaymentProviderConfigurationDto } from "./PaymentProviderConfigurationDto";

export type UpdatePaymentProviderResult = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    name?: string;
    /**
     * @type string | undefined
     */
    code?: string;
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
