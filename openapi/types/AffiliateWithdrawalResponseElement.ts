import type { AffiliateWithdrawalResultAffiliateElement } from "./AffiliateWithdrawalResultAffiliateElement";
import type { ResponseWithdrawalRequestStatus } from "./ResponseWithdrawalRequestStatus";

export type AffiliateWithdrawalResponseElement = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    affiliate?: AffiliateWithdrawalResultAffiliateElement;
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
