import type { ResponseTransactionType } from "./ResponseTransactionType";
import type { ResponseTransactionStatus } from "./ResponseTransactionStatus";

export type MerchantTransactionResponseElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string
     */
    extId?: string | null;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type number, double
     */
    amountInUsdt?: number | null;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type number | undefined, double
     */
    currencyRate?: number;
    /**
     * @type string
     */
    cardNumber?: string | null;
    /**
     * @type string
     */
    phoneNumber?: string | null;
    type?: ResponseTransactionType;
    status?: ResponseTransactionStatus;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    /**
     * @type string | undefined, date-time
     */
    updatedAt?: string;
    /**
     * @type string | undefined, date-time
     */
    expiresAt?: string;
    /**
     * @type number | undefined, double
     */
    commissionInUsdt?: number;
    /**
     * @type number | undefined, double
     */
    totalAmountInUsdt?: number;
    /**
     * @type string | undefined
     */
    paymentMethod?: string;
};
