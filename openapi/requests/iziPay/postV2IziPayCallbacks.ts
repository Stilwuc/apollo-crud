import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2IziPayCallbacksMutationRequest,
    PostV2IziPayCallbacksMutationResponse,
} from "../../types/iziPay/PostV2IziPayCallbacks";

/**
 * @link /v2/izi-pay/callbacks
 */
export async function postV2IziPayCallbacks(
    data?: PostV2IziPayCallbacksMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2IziPayCallbacksMutationResponse>["data"]> {
    const res = await client<
        PostV2IziPayCallbacksMutationResponse,
        PostV2IziPayCallbacksMutationRequest
    >({ method: "post", url: `/v2/izi-pay/callbacks`, data, ...options });
    return res.data;
}
