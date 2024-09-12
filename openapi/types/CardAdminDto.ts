import type { CardBankAccountAdminDto } from "./CardBankAccountAdminDto";
import type { CardTeamAdminDto } from "./CardTeamAdminDto";
import type { CardLockTypeResponse } from "./CardLockTypeResponse";
import type { CardActivityAdminDto } from "./CardActivityAdminDto";
import type { CardConfigurationTeamAdminDto } from "./CardConfigurationTeamAdminDto";

export type CardAdminDto = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
    bankAccount?: CardBankAccountAdminDto;
    team?: CardTeamAdminDto;
    /**
     * @type string | undefined
     */
    number?: string;
    /**
     * @type string | undefined
     */
    paymentSystem?: string;
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
    lockType?: CardLockTypeResponse;
    /**
     * @type integer, int32
     */
    unlockAmount?: number | null;
    /**
     * @type number | undefined, double
     */
    limit?: number;
    activity?: CardActivityAdminDto;
    configuration?: CardConfigurationTeamAdminDto;
};
