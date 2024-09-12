import type { ResponseTransactionType } from "./ResponseTransactionType";
import type { ResponseTransactionStatus } from "./ResponseTransactionStatus";

export type TeamTransactionResponseElement = {
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
     * @type string | undefined
     */
    cardNumber?: string;
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
     * @type string, date-time
     */
    payedAt?: string | null;
    /**
     * @type number, double
     */
    feeInUsdt?: number | null;
    /**
     * @type number | undefined, double
     */
    originalAmount?: number;
    /**
     * @type string, date-time
     */
    closedAt?: string | null;
    /**
     * @type string
     */
    requisite?: string | null;
    /**
     * @type string
     */
    paymentMethod?: string | null;
};
