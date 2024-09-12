import type { BankAccountTeamDto } from "./BankAccountTeamDto";
import type { BankDto } from "./BankDto";

export type BankAccountAdminDto = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
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
    isDeleted?: boolean;
    /**
     * @type boolean | undefined
     */
    isManualConfirmation?: boolean;
    /**
     * @type boolean | undefined
     */
    isLocked?: boolean;
    /**
     * @type string
     */
    lockReason?: string | null;
    team?: BankAccountTeamDto;
    bank?: BankDto;
};
