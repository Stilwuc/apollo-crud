import type { TeamBalanceDepositStatus } from "./TeamBalanceDepositStatus";

export type TeamDepositResponseDto = {
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
    status?: TeamBalanceDepositStatus;
    /**
     * @type string | undefined
     */
    walletTo?: string;
    /**
     * @type number, double
     */
    payedAmount?: number | null;
    /**
     * @type string
     */
    transactionHash?: string | null;
    /**
     * @type string
     */
    walletFrom?: string | null;
};
