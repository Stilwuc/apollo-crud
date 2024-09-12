import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2MerchantBalanceQueryResponse } from "../../types/merchantEndpoints/GetV2MerchantBalance";

/**
 * @link /v2/merchant/balance
 */
export async function getV2MerchantBalance(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2MerchantBalanceQueryResponse>["data"]> {
    const res = await client<GetV2MerchantBalanceQueryResponse>({
        method: "get",
        url: `/v2/merchant/balance`,
        ...options,
    });
    return res.data;
}
