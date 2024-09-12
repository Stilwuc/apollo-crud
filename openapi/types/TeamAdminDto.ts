export type TeamAdminDto = {
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
     * @type boolean | undefined
     */
    isEnabled?: boolean;
    /**
     * @type boolean | undefined
     */
    isDeleted?: boolean;
    /**
     * @type string | undefined
     */
    timezone?: string;
    /**
     * @type string | undefined, date-time
     */
    created?: string;
    /**
     * @type string | undefined, date-time
     */
    lastModified?: string;
    /**
     * @type integer | undefined, int32
     */
    withdrawalTransactionLimit?: number;
    /**
     * @type integer | undefined, int32
     */
    rateDownScale?: number;
};
