import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTrafficThreadsMutationRequest,
    PostV2AdminTrafficThreadsMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminTrafficThreads";

/**
 * @link /v2/admin/traffic-threads
 */
export async function postV2AdminTrafficThreads(
    data?: PostV2AdminTrafficThreadsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminTrafficThreadsMutationResponse>["data"]> {
    const res = await client<
        PostV2AdminTrafficThreadsMutationResponse,
        PostV2AdminTrafficThreadsMutationRequest
    >({ method: "post", url: `/v2/admin/traffic-threads`, data, ...options });
    return res.data;
}
