import type { CallbackClientType } from "./CallbackClientType";
import type { AppellationCallbackGatewayType } from "./AppellationCallbackGatewayType";

export type MerchantConfiguration = {
    /**
     * @type boolean | undefined
     */
    areCallbacksEnabled?: boolean;
    /**
     * @type string
     */
    callbackUrl?: string | null;
    callbackClientType?: CallbackClientType;
    /**
     * @type string
     */
    authorizationClientUsername?: string | null;
    /**
     * @type integer, int64
     */
    transactionExpirationTimeout?: number | null;
    /**
     * @type integer, int64
     */
    withdrawalTransactionExpirationTimeout?: number | null;
    /**
     * @type string
     */
    secretKey?: string | null;
    /**
     * @type string
     */
    redirectUrl?: string | null;
    /**
     * @type string
     */
    successUrl?: string | null;
    /**
     * @type string
     */
    failureUrl?: string | null;
    /**
     * @type string
     */
    cancelUrl?: string | null;
    /**
     * @type string
     */
    paymentPageUrl?: string | null;
    appellationCallbackGatewayType?: AppellationCallbackGatewayType;
    /**
     * @type string
     */
    appellationCallbackUrl?: string | null;
    /**
     * @type integer, int32
     */
    maxAmountIncrement?: number | null;
};
