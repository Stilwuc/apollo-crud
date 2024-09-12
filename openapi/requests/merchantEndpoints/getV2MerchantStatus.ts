import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2MerchantStatusQueryResponse } from "../../types/merchantEndpoints/GetV2MerchantStatus";

/**
 * @link /v2/merchant/status
 */
export async function getV2MerchantStatus(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2MerchantStatusQueryResponse>["data"]> {
    const res = await client<GetV2MerchantStatusQueryResponse>({
        method: "get",
        url: `/v2/merchant/status`,
        ...options,
    });
    return res.data;
}
