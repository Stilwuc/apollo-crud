import type { ResponseAppellationStatus } from "./ResponseAppellationStatus";
import type { TransactionResponseElement } from "./TransactionResponseElement";

export type AppellationInfoResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    status?: ResponseAppellationStatus;
    /**
     * @type number, double
     */
    amount?: number | null;
    /**
     * @type string
     */
    picture?: string | null;
    transaction?: TransactionResponseElement;
};
