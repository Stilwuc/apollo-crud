import type { RequestTransactionType } from "./RequestTransactionType";
import type { TransactionRequestStatus } from "./TransactionRequestStatus";

export type StandardCallbackRequest = {
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
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type number | undefined, double
     */
    currencyRate?: number;
    type?: RequestTransactionType;
    status?: TransactionRequestStatus;
};
