import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantsMutationRequest,
    PostV2AdminMerchantsMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminMerchants";

/**
 * @link /v2/admin/merchants
 */
export async function postV2AdminMerchants(
    data?: PostV2AdminMerchantsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminMerchantsMutationResponse>["data"]> {
    const res = await client<
        PostV2AdminMerchantsMutationResponse,
        PostV2AdminMerchantsMutationRequest
    >({ method: "post", url: `/v2/admin/merchants`, data, ...options });
    return res.data;
}
