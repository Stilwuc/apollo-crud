import type { CardsBankAccountAdminDto } from "./CardsBankAccountAdminDto";
import type { CardsTeamAdminDto } from "./CardsTeamAdminDto";
import type { CardLockTypeResponse } from "./CardLockTypeResponse";
import type { CardsActivityAdminDto } from "./CardsActivityAdminDto";
import type { CardConfigurationsTeamAdminDto } from "./CardConfigurationsTeamAdminDto";

export type CardsAdminDto = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
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
    bankAccount?: CardsBankAccountAdminDto;
    team?: CardsTeamAdminDto;
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
    activity?: CardsActivityAdminDto;
    configuration?: CardConfigurationsTeamAdminDto;
};
