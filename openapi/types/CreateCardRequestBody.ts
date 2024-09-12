export type CreateCardRequestBody = {
    /**
     * @type string | undefined, uuid
     */
    bankAccountId?: string;
    /**
     * @type string | undefined
     */
    number?: string;
    /**
     * @type string | undefined
     */
    paymentSystem?: string;
    /**
     * @type string
     */
    tag?: string | null;
    /**
     * @type number | undefined, double
     */
    limit?: number;
    /**
     * @type integer | undefined, int32
     */
    transactionCountPerInterval?: number;
    /**
     * @type integer | undefined, int32
     */
    intervalInMinutes?: number;
};
