import type { MerchantBalanceDepositStatus } from "./MerchantBalanceDepositStatus";

export type CreateMerchantDepositResponseDto = {
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
    status?: MerchantBalanceDepositStatus;
    /**
     * @type string | undefined
     */
    walletTo?: string;
};
