import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2PaymentFormOrderidMutationRequest,
    PostV2PaymentFormOrderidMutationResponse,
    PostV2PaymentFormOrderidPathParams,
} from "../../types/paymentForm/PostV2PaymentFormOrderid";

/**
 * @link /v2/payment-form/:orderId
 */
export async function postV2PaymentFormOrderid(
    orderId: PostV2PaymentFormOrderidPathParams["orderId"],
    data?: PostV2PaymentFormOrderidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2PaymentFormOrderidMutationResponse>["data"]> {
    const res = await client<
        PostV2PaymentFormOrderidMutationResponse,
        PostV2PaymentFormOrderidMutationRequest
    >({ method: "post", url: `/v2/payment-form/${orderId}`, data, ...options });
    return res.data;
}
