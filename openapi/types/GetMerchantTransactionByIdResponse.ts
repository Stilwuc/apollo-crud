import type { TransactionType } from "./TransactionType";
import type { TransactionStatus } from "./TransactionStatus";

export type GetMerchantTransactionByIdResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string
     */
    extId?: string | null;
    /**
     * @type string
     */
    callbackUrl?: string | null;
    /**
     * @type number | undefined, double
     */
    amount?: number;
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
    /**
     * @type string | undefined
     */
    phoneNumber?: string;
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
     * @type string | undefined, date-time
     */
    expiresAt?: string;
    /**
     * @type number | undefined, double
     */
    amountInUsdt?: number;
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
