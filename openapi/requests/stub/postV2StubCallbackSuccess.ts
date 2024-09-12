import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2StubCallbackSuccessMutationRequest,
    PostV2StubCallbackSuccessMutationResponse,
} from "../../types/stub/PostV2StubCallbackSuccess";

/**
 * @link /v2/stub/callback/success
 */
export async function postV2StubCallbackSuccess(
    data?: PostV2StubCallbackSuccessMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2StubCallbackSuccessMutationResponse>["data"]> {
    const res = await client<
        PostV2StubCallbackSuccessMutationResponse,
        PostV2StubCallbackSuccessMutationRequest
    >({ method: "post", url: `/v2/stub/callback/success`, data, ...options });
    return res.data;
}
