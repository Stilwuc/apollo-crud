export type UpdateCardRequestBody = {
    /**
     * @type string
     */
    paymentSystem?: string | null;
    /**
     * @type string
     */
    tag?: string | null;
    /**
     * @type number, double
     */
    limit?: number | null;
    /**
     * @type integer, int32
     */
    transactionCountPerInterval?: number | null;
    /**
     * @type integer, int32
     */
    intervalInMinutes?: number | null;
};
