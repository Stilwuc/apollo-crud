import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2StubCallbackFailureMutationRequest,
    PostV2StubCallbackFailureMutationResponse,
} from "../../types/stub/PostV2StubCallbackFailure";

/**
 * @link /v2/stub/callback/failure
 */
export async function postV2StubCallbackFailure(
    data?: PostV2StubCallbackFailureMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2StubCallbackFailureMutationResponse>["data"]> {
    const res = await client<
        PostV2StubCallbackFailureMutationResponse,
        PostV2StubCallbackFailureMutationRequest
    >({ method: "post", url: `/v2/stub/callback/failure`, data, ...options });
    return res.data;
}
