import type { ResponseTransactionStatus } from "./ResponseTransactionStatus";

export type TransactionStatusResponseElement = {
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
     * @type number | undefined, double
     */
    currencyRate?: number;
    /**
     * @type number | undefined, double
     */
    amountInUsdt?: number;
    status?: ResponseTransactionStatus;
};
