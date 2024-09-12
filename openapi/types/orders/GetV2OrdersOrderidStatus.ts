import type { OrderStatusResponse } from "../OrderStatusResponse";

export type GetV2OrdersOrderidStatusPathParams = {
    /**
     * @type string, uuid
     */
    orderId: string;
};
/**
 * @description Success
 */
export type GetV2OrdersOrderidStatus200 = OrderStatusResponse;
/**
 * @description Success
 */
export type GetV2OrdersOrderidStatusQueryResponse = OrderStatusResponse;
export type GetV2OrdersOrderidStatusQuery = {
    Response: GetV2OrdersOrderidStatusQueryResponse;
    PathParams: GetV2OrdersOrderidStatusPathParams;
};
