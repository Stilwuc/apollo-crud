import type { PaymentFormDepositRequisiteResponse } from "../PaymentFormDepositRequisiteResponse";
import type { PopulatePreCreatedDepositTransactionRequest } from "../PopulatePreCreatedDepositTransactionRequest";

export type PostV2PaymentFormOrderidPathParams = {
    /**
     * @type string, uuid
     */
    orderId: string;
};
/**
 * @description Success
 */
export type PostV2PaymentFormOrderid200 = PaymentFormDepositRequisiteResponse;
export type PostV2PaymentFormOrderidMutationRequest =
    PopulatePreCreatedDepositTransactionRequest;
/**
 * @description Success
 */
export type PostV2PaymentFormOrderidMutationResponse =
    PaymentFormDepositRequisiteResponse;
export type PostV2PaymentFormOrderidMutation = {
    Response: PostV2PaymentFormOrderidMutationResponse;
    Request: PostV2PaymentFormOrderidMutationRequest;
    PathParams: PostV2PaymentFormOrderidPathParams;
};
