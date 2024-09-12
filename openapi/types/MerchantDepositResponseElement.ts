import type { MerchantDepositMerchantResultElement } from "./MerchantDepositMerchantResultElement";
import type { MerchantBalanceDepositStatus } from "./MerchantBalanceDepositStatus";

export type MerchantDepositResponseElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    merchant?: MerchantDepositMerchantResultElement;
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
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type number, double
     */
    payedAmount?: number | null;
    /**
     * @type integer | undefined, int64
     */
    externalTransactionId?: number;
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
