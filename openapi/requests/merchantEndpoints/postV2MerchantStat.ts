import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantStatMutationRequest,
    PostV2MerchantStatMutationResponse,
} from "../../types/merchantEndpoints/PostV2MerchantStat";

/**
 * @link /v2/merchant/stat
 */
export async function postV2MerchantStat(
    data?: PostV2MerchantStatMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2MerchantStatMutationResponse>["data"]> {
    const res = await client<
        PostV2MerchantStatMutationResponse,
        PostV2MerchantStatMutationRequest
    >({ method: "post", url: `/v2/merchant/stat`, data, ...options });
    return res.data;
}
