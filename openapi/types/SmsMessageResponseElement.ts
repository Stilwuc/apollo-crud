import type { TransactionIdResponse } from "./TransactionIdResponse";
import type { CardShortInfo } from "./CardShortInfo";

export type SmsMessageResponseElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    /**
     * @type string | undefined
     */
    message?: string;
    /**
     * @type string | undefined
     */
    sender?: string;
    /**
     * @type string | undefined
     */
    receiver?: string;
    /**
     * @type string | undefined
     */
    result?: string;
    /**
     * @type number, double
     */
    amount?: number | null;
    /**
     * @type string
     */
    cardTail?: string | null;
    transaction?: TransactionIdResponse;
    card?: CardShortInfo;
};
