import type { ResponseTransactionCallbackTrackingStatus } from "./ResponseTransactionCallbackTrackingStatus";
import type { TransactionCallbackTransactionResponseElement } from "./TransactionCallbackTransactionResponseElement";
import type { TransactionCallbackMerchantResponseElement } from "./TransactionCallbackMerchantResponseElement";

export type TransactionCallbackResponseElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    status?: ResponseTransactionCallbackTrackingStatus;
    /**
     * @type integer | undefined, int32
     */
    attempts?: number;
    /**
     * @type number, double
     */
    amount?: number | null;
    /**
     * @type integer, int32
     */
    responseCode?: number | null;
    transaction?: TransactionCallbackTransactionResponseElement;
    merchant?: TransactionCallbackMerchantResponseElement;
};
