import type { ResponseTransactionCallbackTrackingStatus } from "./ResponseTransactionCallbackTrackingStatus";
import type { TransactionCallbackInfoTransactionResponse } from "./TransactionCallbackInfoTransactionResponse";
import type { TransactionCallbackInfoMerchantResponse } from "./TransactionCallbackInfoMerchantResponse";

export type TransactionCallbackInfoResponse = {
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
    /**
     * @type string
     */
    requestUrl?: string | null;
    /**
     * @type string
     */
    requestBody?: string | null;
    /**
     * @type string
     */
    responseHeaders?: string | null;
    /**
     * @type string
     */
    responseBody?: string | null;
    /**
     * @type string
     */
    issue?: string | null;
    transaction?: TransactionCallbackInfoTransactionResponse;
    merchant?: TransactionCallbackInfoMerchantResponse;
};
