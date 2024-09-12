export type CreatePaymentProviderAssociationRequest = {
    /**
     * @type integer | undefined, int64
     */
    paymentProviderId?: number;
    /**
     * @type number, double
     */
    rate?: number | null;
    /**
     * @type integer, int32
     */
    weight?: number | null;
};
