export type CreateBankAccountRequest = {
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
};
