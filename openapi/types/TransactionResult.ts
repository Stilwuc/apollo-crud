import type { TransactionType } from "./TransactionType";
import type { TransactionStatus } from "./TransactionStatus";

export type TransactionResult = {
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
    merchantAmountInUsdt?: number | null;
    /**
     * @type number, double
     */
    teamAmountInUsdt?: number | null;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type number | undefined, double
     */
    currencyRate?: number;
    /**
     * @type number | undefined, double
     */
    merchantCurrencyRate?: number;
    /**
     * @type number | undefined, double
     */
    teamCurrencyRate?: number;
    /**
     * @type string | undefined
     */
    cardNumber?: string;
    /**
     * @type string
     */
    teamName?: string | null;
    /**
     * @type string | undefined
     */
    merchantName?: string;
    /**
     * @type string
     */
    providerName?: string | null;
    /**
     * @type string
     */
    paymentId?: string | null;
    type?: TransactionType;
    status?: TransactionStatus;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    /**
     * @type string | undefined, date-time
     */
    updatedAt?: string;
    /**
     * @type string
     */
    methodName?: string | null;
    /**
     * @type string
     */
    phoneNumber?: string | null;
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
