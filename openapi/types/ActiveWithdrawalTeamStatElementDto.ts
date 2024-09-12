import type { WithdrawalTeamStatElementDto } from "./WithdrawalTeamStatElementDto";
import type { ThreadWithdrawalTeamStatElementDto } from "./ThreadWithdrawalTeamStatElementDto";

export type ActiveWithdrawalTeamStatElementDto = {
    team?: WithdrawalTeamStatElementDto;
    /**
     * @type number | undefined, double
     */
    minAmount?: number;
    /**
     * @type number | undefined, double
     */
    maxAmount?: number;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type number | undefined, double
     */
    limit?: number;
    /**
     * @type number | undefined, double
     */
    rate?: number;
    /**
     * @type array | undefined
     */
    trafficThreads?: ThreadWithdrawalTeamStatElementDto[];
};
