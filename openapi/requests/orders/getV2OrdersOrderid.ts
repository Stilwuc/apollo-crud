import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2OrdersOrderidQueryResponse,
    GetV2OrdersOrderidPathParams,
} from "../../types/orders/GetV2OrdersOrderid";

/**
 * @link /v2/orders/:orderId
 */
export async function getV2OrdersOrderid(
    orderId: GetV2OrdersOrderidPathParams["orderId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2OrdersOrderidQueryResponse>["data"]> {
    const res = await client<GetV2OrdersOrderidQueryResponse>({
        method: "get",
        url: `/v2/orders/${orderId}`,
        ...options,
    });
    return res.data;
}
