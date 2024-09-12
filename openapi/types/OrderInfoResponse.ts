import type { ResponseTransactionStatus } from "./ResponseTransactionStatus";

export type OrderInfoResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    shopName?: string;
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
    cardNumber?: string;
    /**
     * @type string
     */
    cardOwner?: string | null;
    /**
     * @type string | undefined
     */
    bankName?: string;
    status?: ResponseTransactionStatus;
    /**
     * @type string | undefined, date-time
     */
    expiresAt?: string;
    /**
     * @type string
     */
    redirectUrl?: string | null;
};
