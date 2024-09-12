import type { ResponseAppellationStatus } from "./ResponseAppellationStatus";
import type { AdminAppellationTransactionResponse } from "./AdminAppellationTransactionResponse";
import type { AdminAppellationMerchantResponse } from "./AdminAppellationMerchantResponse";
import type { AdminAppellationTeamResponse } from "./AdminAppellationTeamResponse";

export type AdminAppellationInfoResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    /**
     * @type number, double
     */
    amount?: number | null;
    /**
     * @type string
     */
    picture?: string | null;
    status?: ResponseAppellationStatus;
    transaction?: AdminAppellationTransactionResponse;
    merchant?: AdminAppellationMerchantResponse;
    team?: AdminAppellationTeamResponse;
};
