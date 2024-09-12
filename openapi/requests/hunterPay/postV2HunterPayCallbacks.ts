import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2HunterPayCallbacksMutationRequest,
    PostV2HunterPayCallbacksMutationResponse,
} from "../../types/hunterPay/PostV2HunterPayCallbacks";

/**
 * @link /v2/hunter-pay/callbacks
 */
export async function postV2HunterPayCallbacks(
    data?: PostV2HunterPayCallbacksMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2HunterPayCallbacksMutationResponse>["data"]> {
    const res = await client<
        PostV2HunterPayCallbacksMutationResponse,
        PostV2HunterPayCallbacksMutationRequest
    >({ method: "post", url: `/v2/hunter-pay/callbacks`, data, ...options });
    return res.data;
}
