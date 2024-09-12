import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2MerchantConfigQueryResponse } from "../../types/merchantEndpoints/GetV2MerchantConfig";

/**
 * @link /v2/merchant/config
 */
export async function getV2MerchantConfig(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2MerchantConfigQueryResponse>["data"]> {
    const res = await client<GetV2MerchantConfigQueryResponse>({
        method: "get",
        url: `/v2/merchant/config`,
        ...options,
    });
    return res.data;
}
