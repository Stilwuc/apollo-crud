export type TeamBankAccountCardDto = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
    /**
     * @type string | undefined, date-time
     */
    created?: string;
    /**
     * @type string | undefined
     */
    number?: string;
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
    isDeleted?: boolean;
};
