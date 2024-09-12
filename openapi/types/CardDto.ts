import type { CardLockTypeResponse } from "./CardLockTypeResponse";
import type { TeamCardActivityDto } from "./TeamCardActivityDto";
import type { CardConfigurationDto } from "./CardConfigurationDto";

export type CardDto = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
    /**
     * @type string | undefined, uuid
     */
    bankAccountId?: string;
    /**
     * @type string | undefined
     */
    currency?: string;
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
    /**
     * @type number | undefined, double
     */
    limit?: number;
    /**
     * @type boolean | undefined
     */
    isSBPCard?: boolean;
    lockType?: CardLockTypeResponse;
    /**
     * @type integer, int32
     */
    unlockAmount?: number | null;
    activity?: TeamCardActivityDto;
    configuration?: CardConfigurationDto;
};
