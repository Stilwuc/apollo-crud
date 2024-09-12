export type TransactionChangeInfo = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined, date-time
     */
    time?: string;
    /**
     * @type string | undefined
     */
    action?: string;
    /**
     * @type string
     */
    message?: string | null;
    /**
     * @type string
     */
    changedBy?: string | null;
    /**
     * @type string | undefined
     */
    status?: string;
};
