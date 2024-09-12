export type TransactionStatusCallbackRequest = {
    /**
     * @type string | undefined, uuid
     */
    order_uuid?: string;
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type number | undefined, double
     */
    real_income?: number;
};
