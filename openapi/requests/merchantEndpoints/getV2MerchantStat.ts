import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2MerchantStatQueryResponse } from "../../types/merchantEndpoints/GetV2MerchantStat";

/**
 * @link /v2/merchant/stat
 */
export async function getV2MerchantStat(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2MerchantStatQueryResponse>["data"]> {
    const res = await client<GetV2MerchantStatQueryResponse>({
        method: "get",
        url: `/v2/merchant/stat`,
        ...options,
    });
    return res.data;
}
