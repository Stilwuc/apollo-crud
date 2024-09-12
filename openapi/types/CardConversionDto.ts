import type { CardShortInfo } from "./CardShortInfo";
import type { TeamShortInfo } from "./TeamShortInfo";
import type { BankAccountShortInfo } from "./BankAccountShortInfo";

export type CardConversionDto = {
    card?: CardShortInfo;
    team?: TeamShortInfo;
    bankAccount?: BankAccountShortInfo;
    /**
     * @type string, date-time
     */
    lastTransactionDate?: string | null;
    /**
     * @type integer | undefined, int32
     */
    expiredTransactionCount?: number;
    /**
     * @type integer | undefined, int32
     */
    paidTransactionCount?: number;
    /**
     * @type integer | undefined, int32
     */
    totalCount?: number;
    /**
     * @type number | undefined, double
     */
    conversion?: number;
};
