import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2OrdersOrderidCancelMutationResponse,
    PostV2OrdersOrderidCancelPathParams,
} from "../../types/orders/PostV2OrdersOrderidCancel";

/**
 * @link /v2/orders/:orderId/cancel
 */
export async function postV2OrdersOrderidCancel(
    orderId: PostV2OrdersOrderidCancelPathParams["orderId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2OrdersOrderidCancelMutationResponse>["data"]> {
    const res = await client<PostV2OrdersOrderidCancelMutationResponse>({
        method: "post",
        url: `/v2/orders/${orderId}/cancel`,
        ...options,
    });
    return res.data;
}
