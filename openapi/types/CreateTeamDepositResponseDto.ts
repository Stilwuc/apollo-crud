import type { TeamBalanceDepositStatus } from "./TeamBalanceDepositStatus";

export type CreateTeamDepositResponseDto = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    /**
     * @type string | undefined, date-time
     */
    expiresAt?: string;
    status?: TeamBalanceDepositStatus;
    /**
     * @type string | undefined
     */
    walletTo?: string;
};
