import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2MerchantConfigMutationRequest,
    PatchV2MerchantConfigMutationResponse,
} from "../../types/merchantEndpoints/PatchV2MerchantConfig";

/**
 * @link /v2/merchant/config
 */
export async function patchV2MerchantConfig(
    data?: PatchV2MerchantConfigMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PatchV2MerchantConfigMutationResponse>["data"]> {
    const res = await client<
        PatchV2MerchantConfigMutationResponse,
        PatchV2MerchantConfigMutationRequest
    >({ method: "patch", url: `/v2/merchant/config`, data, ...options });
    return res.data;
}
