export type UpdateBankAccountResponse = {
    /**
     * @type string | undefined, uuid
     */
    bankAccountId?: string;
    /**
     * @type string | undefined
     */
    phoneNumber?: string;
    /**
     * @type string
     */
    bankName?: string | null;
    /**
     * @type string | undefined
     */
    country?: string;
    /**
     * @type string | undefined
     */
    currency?: string;
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
