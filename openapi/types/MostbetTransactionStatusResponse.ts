import type { MostbetTransactionStatus } from "./MostbetTransactionStatus";

export type MostbetTransactionStatusResponse = {
    status?: MostbetTransactionStatus;
    /**
     * @type string | undefined
     */
    transactionId?: string;
    /**
     * @type string | undefined
     */
    amount?: string;
    /**
     * @type string | undefined
     */
    currency?: string;
};
