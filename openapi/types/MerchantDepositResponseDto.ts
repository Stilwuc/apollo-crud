import type { MerchantBalanceDepositStatus } from "./MerchantBalanceDepositStatus";

export type MerchantDepositResponseDto = {
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
    status?: MerchantBalanceDepositStatus;
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
