import type { TeamBankAccountCardDto } from "./TeamBankAccountCardDto";

export type TeamBankAccountDto = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
    /**
     * @type string | undefined, date-time
     */
    created?: string;
    /**
     * @type string
     */
    owner?: string | null;
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
    tag?: string | null;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
    /**
     * @type boolean | undefined
     */
    isDeleted?: boolean;
    /**
     * @type array | undefined
     */
    cards?: TeamBankAccountCardDto[];
};
