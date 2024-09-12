import type { PaymentFormDepositRequisiteType } from "./PaymentFormDepositRequisiteType";
import type { ResponseTransactionStatus } from "./ResponseTransactionStatus";

export type PaymentFormDepositRequisiteResponse = {
    /**
     * @type number | undefined, double
     */
    originalAmount?: number;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    method?: PaymentFormDepositRequisiteType;
    status?: ResponseTransactionStatus;
    /**
     * @type string | undefined, date-time
     */
    expiresAt?: string;
};
