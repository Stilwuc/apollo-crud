import type { ResponseTransactionCallbackTrackingStatus } from "./ResponseTransactionCallbackTrackingStatus";

export type AdminTransactionCallbackInfoResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    /**
     * @type string
     */
    url?: string | null;
    status?: ResponseTransactionCallbackTrackingStatus;
    /**
     * @type integer | undefined, int32
     */
    attempts?: number;
    /**
     * @type number, double
     */
    amount?: number | null;
};
