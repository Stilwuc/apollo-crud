import type { ResponseTransactionStatus } from "./ResponseTransactionStatus";
import type { ResponseTransactionType } from "./ResponseTransactionType";
import type { TransactionMerchantResultElement } from "./TransactionMerchantResultElement";
import type { TransactionTeamResultElement } from "./TransactionTeamResultElement";

export type AdminTransactionResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string
     */
    extId?: string | null;
    status?: ResponseTransactionStatus;
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
     * @type number | undefined, double
     */
    amountInUsdt?: number;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    type?: ResponseTransactionType;
    merchant?: TransactionMerchantResultElement;
    team?: TransactionTeamResultElement;
    /**
     * @type string | undefined
     */
    paymentMethod?: string;
};
