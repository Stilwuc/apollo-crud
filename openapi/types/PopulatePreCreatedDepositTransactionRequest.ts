import type { PaymentFormDepositRequisiteType } from "./PaymentFormDepositRequisiteType";

export type PopulatePreCreatedDepositTransactionRequest = {
    /**
     * @type number | undefined, double
     */
    amount?: number;
    method?: PaymentFormDepositRequisiteType;
};
