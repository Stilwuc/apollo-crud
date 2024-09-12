import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2PaymentFormOrderidQueryResponse,
    GetV2PaymentFormOrderidPathParams,
} from "../../types/paymentForm/GetV2PaymentFormOrderid";

/**
 * @link /v2/payment-form/:orderId
 */
export async function getV2PaymentFormOrderid(
    orderId: GetV2PaymentFormOrderidPathParams["orderId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2PaymentFormOrderidQueryResponse>["data"]> {
    const res = await client<GetV2PaymentFormOrderidQueryResponse>({
        method: "get",
        url: `/v2/payment-form/${orderId}`,
        ...options,
    });
    return res.data;
}
