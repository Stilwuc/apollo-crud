import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamPingMutationRequest,
    PostV2TeamPingMutationResponse,
} from "../../types/automation/PostV2TeamPing";

/**
 * @link /v2/team/ping
 */
export async function postV2TeamPing(
    data?: PostV2TeamPingMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2TeamPingMutationResponse>["data"]> {
    const res = await client<
        PostV2TeamPingMutationResponse,
        PostV2TeamPingMutationRequest
    >({ method: "post", url: `/v2/team/ping`, data, ...options });
    return res.data;
}
