import type { PaymentInfoRequest } from "./PaymentInfoRequest";

export type PaymentRequestBody = {
    /**
     * @type integer | undefined, int64
     */
    transactionId?: number;
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type string
     */
    tag?: string | null;
    payment?: PaymentInfoRequest;
    /**
     * @type string
     */
    issue?: string | null;
};
