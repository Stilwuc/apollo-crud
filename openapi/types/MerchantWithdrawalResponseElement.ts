import type { MerchantWithdrawalResultMerchantElement } from "./MerchantWithdrawalResultMerchantElement";
import type { ResponseWithdrawalRequestStatus } from "./ResponseWithdrawalRequestStatus";

export type MerchantWithdrawalResponseElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    merchant?: MerchantWithdrawalResultMerchantElement;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
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
