import type { ResponseAppellationStatus } from "./ResponseAppellationStatus";
import type { AdminAppellationTransactionResponse } from "./AdminAppellationTransactionResponse";
import type { AdminAppellationMerchantResponse } from "./AdminAppellationMerchantResponse";
import type { AdminAppellationTeamResponse } from "./AdminAppellationTeamResponse";

export type AdminAppellationResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined, date-time
     */
    createdAt?: string;
    status?: ResponseAppellationStatus;
    /**
     * @type number, double
     */
    amount?: number | null;
    transaction?: AdminAppellationTransactionResponse;
    merchant?: AdminAppellationMerchantResponse;
    team?: AdminAppellationTeamResponse;
};
