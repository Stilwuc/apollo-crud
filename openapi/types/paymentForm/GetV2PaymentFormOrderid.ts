import type { PaymentFormDepositRequisiteResponse } from "../PaymentFormDepositRequisiteResponse";

export type GetV2PaymentFormOrderidPathParams = {
    /**
     * @type string, uuid
     */
    orderId: string;
};
/**
 * @description Success
 */
export type GetV2PaymentFormOrderid200 = PaymentFormDepositRequisiteResponse;
/**
 * @description Success
 */
export type GetV2PaymentFormOrderidQueryResponse =
    PaymentFormDepositRequisiteResponse;
export type GetV2PaymentFormOrderidQuery = {
    Response: GetV2PaymentFormOrderidQueryResponse;
    PathParams: GetV2PaymentFormOrderidPathParams;
};
