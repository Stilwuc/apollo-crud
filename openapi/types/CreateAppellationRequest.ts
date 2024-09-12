export type CreateAppellationRequest = {
    /**
     * @type integer | undefined, int64
     */
    transactionId?: number;
    /**
     * @type number, double
     */
    amount?: number | null;
    /**
     * @type string, binary
     */
    img?: Blob | null;
    /**
     * @type string
     */
    comment?: string | null;
};
