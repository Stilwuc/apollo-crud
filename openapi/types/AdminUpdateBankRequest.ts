export type AdminUpdateBankRequest = {
    /**
     * @type string
     */
    name?: string | null;
    /**
     * @type boolean
     */
    isDeleted?: boolean | null;
    /**
     * @type string, uuid
     */
    currencyId?: string | null;
};
