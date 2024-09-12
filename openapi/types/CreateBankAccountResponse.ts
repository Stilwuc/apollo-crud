export type CreateBankAccountResponse = {
    /**
     * @type string | undefined, uuid
     */
    bankAccountId?: string;
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
    /**
     * @type string | undefined
     */
    phoneNumber?: string;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type string | undefined
     */
    bankName?: string;
    /**
     * @type string | undefined
     */
    country?: string;
    /**
     * @type string
     */
    owner?: string | null;
    /**
     * @type string
     */
    tag?: string | null;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
    /**
     * @type boolean | undefined
     */
    isLocked?: boolean;
};
