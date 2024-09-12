import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2OrdersOrderidStatusQueryResponse,
    GetV2OrdersOrderidStatusPathParams,
} from "../../types/orders/GetV2OrdersOrderidStatus";

/**
 * @link /v2/orders/:orderId/status
 */
export async function getV2OrdersOrderidStatus(
    orderId: GetV2OrdersOrderidStatusPathParams["orderId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2OrdersOrderidStatusQueryResponse>["data"]> {
    const res = await client<GetV2OrdersOrderidStatusQueryResponse>({
        method: "get",
        url: `/v2/orders/${orderId}/status`,
        ...options,
    });
    return res.data;
}
