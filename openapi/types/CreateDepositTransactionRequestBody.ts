import type { Payload } from "./Payload";

export type CreateDepositTransactionRequestBody = {
    /**
     * @type string | undefined
     */
    orderId?: string;
    /**
     * @type string | undefined
     */
    callbackUrl?: string;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type string | undefined
     */
    methodType?: string;
    payload?: Payload;
};
