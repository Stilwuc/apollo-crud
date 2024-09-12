export type TeamDto = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
    /**
     * @type string | undefined
     */
    name?: string;
    /**
     * @type number | undefined, double
     */
    availableBalance?: number;
    /**
     * @type number | undefined, double
     */
    frozenBalance?: number;
    /**
     * @type number | undefined, double
     */
    insuranceBalance?: number;
    /**
     * @type integer | undefined, int32
     */
    withdrawalTransactionLimit?: number;
    /**
     * @type integer | undefined, int32
     */
    rateDownScale?: number;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
};
