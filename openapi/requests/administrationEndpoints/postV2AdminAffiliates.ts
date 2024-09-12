import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminAffiliatesMutationRequest,
    PostV2AdminAffiliatesMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminAffiliates";

/**
 * @link /v2/admin/affiliates
 */
export async function postV2AdminAffiliates(
    data?: PostV2AdminAffiliatesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminAffiliatesMutationResponse>["data"]> {
    const res = await client<
        PostV2AdminAffiliatesMutationResponse,
        PostV2AdminAffiliatesMutationRequest
    >({ method: "post", url: `/v2/admin/affiliates`, data, ...options });
    return res.data;
}
