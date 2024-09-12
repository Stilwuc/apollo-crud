import type { TeamDepositTeamResponseElement } from "./TeamDepositTeamResponseElement";
import type { TeamBalanceDepositStatus } from "./TeamBalanceDepositStatus";

export type TeamDepositResponseElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    team?: TeamDepositTeamResponseElement;
    /**
     * @type string | undefined, date-time
     */
    expiresAt?: string;
    status?: TeamBalanceDepositStatus;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type number, double
     */
    payedAmount?: number | null;
    /**
     * @type integer, int64
     */
    externalTransactionId?: number | null;
    /**
     * @type string
     */
    transactionHash?: string | null;
    /**
     * @type string
     */
    walletFrom?: string | null;
    /**
     * @type string | undefined
     */
    walletTo?: string;
};
