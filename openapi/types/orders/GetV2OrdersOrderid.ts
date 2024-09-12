import type { OrderInfoResponse } from "../OrderInfoResponse";

export type GetV2OrdersOrderidPathParams = {
    /**
     * @type string, uuid
     */
    orderId: string;
};
/**
 * @description Success
 */
export type GetV2OrdersOrderid200 = OrderInfoResponse;
/**
 * @description Success
 */
export type GetV2OrdersOrderidQueryResponse = OrderInfoResponse;
export type GetV2OrdersOrderidQuery = {
    Response: GetV2OrdersOrderidQueryResponse;
    PathParams: GetV2OrdersOrderidPathParams;
};
