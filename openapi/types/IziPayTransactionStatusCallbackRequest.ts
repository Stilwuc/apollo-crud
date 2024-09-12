export type IziPayTransactionStatusCallbackRequest = {
    /**
     * @type string | undefined
     */
    id?: string;
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type number, double
     */
    amount?: number | null;
    /**
     * @type string | undefined
     */
    outter_id?: string;
};
