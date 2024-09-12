import type { TeamWithdrawalTeamResponseElement } from "./TeamWithdrawalTeamResponseElement";
import type { ResponseWithdrawalRequestStatus } from "./ResponseWithdrawalRequestStatus";

export type TeamWithdrawalResponseElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    team?: TeamWithdrawalTeamResponseElement;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    account?: string;
    /**
     * @type string
     */
    transactionHash?: string | null;
    status?: ResponseWithdrawalRequestStatus;
    /**
     * @type number, double
     */
    commission?: number | null;
    /**
     * @type object | undefined
     */
    userMetadata?: object;
};
