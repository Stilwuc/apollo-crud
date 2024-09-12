import type { ResponseTransactionStatus } from "./ResponseTransactionStatus";
import type { ResponseTransactionType } from "./ResponseTransactionType";
import type { AdminTransactionRequisite } from "./AdminTransactionRequisite";
import type { AdminTransactionProviderInfo } from "./AdminTransactionProviderInfo";
import type { AdminTransactionInfoMerchantInfo } from "./AdminTransactionInfoMerchantInfo";
import type { AdminTransactionInfoTeamInfo } from "./AdminTransactionInfoTeamInfo";
import type { AdminTransactionInfoTeamAffiliateInfo } from "./AdminTransactionInfoTeamAffiliateInfo";
import type { AdminTransactionInfoMerchantAffiliateInfo } from "./AdminTransactionInfoMerchantAffiliateInfo";

export type AdminTransactionInfoResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string
     */
    extId?: string | null;
    /**
     * @type string
     */
    callbackUrl?: string | null;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    /**
     * @type string | undefined, date-time
     */
    expiresAt?: string;
    status?: ResponseTransactionStatus;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type number | undefined, double
     */
    originalAmount?: number;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type number, double
     */
    profit?: number | null;
    type?: ResponseTransactionType;
    requisite?: AdminTransactionRequisite;
    provider?: AdminTransactionProviderInfo;
    merchant?: AdminTransactionInfoMerchantInfo;
    team?: AdminTransactionInfoTeamInfo;
    teamAffiliate?: AdminTransactionInfoTeamAffiliateInfo;
    merchantAffiliate?: AdminTransactionInfoMerchantAffiliateInfo;
    /**
     * @type object | undefined
     */
    additionalProperties?: object;
};
