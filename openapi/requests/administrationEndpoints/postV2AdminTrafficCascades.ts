import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTrafficCascadesMutationRequest,
    PostV2AdminTrafficCascadesMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminTrafficCascades";

/**
 * @link /v2/admin/traffic-cascades
 */
export async function postV2AdminTrafficCascades(
    data?: PostV2AdminTrafficCascadesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminTrafficCascadesMutationResponse>["data"]> {
    const res = await client<
        PostV2AdminTrafficCascadesMutationResponse,
        PostV2AdminTrafficCascadesMutationRequest
    >({ method: "post", url: `/v2/admin/traffic-cascades`, data, ...options });
    return res.data;
}
