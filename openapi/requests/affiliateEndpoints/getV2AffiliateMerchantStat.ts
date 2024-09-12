import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AffiliateMerchantStatQueryResponse,
    GetV2AffiliateMerchantStatQueryParams,
} from "../../types/affiliateEndpoints/GetV2AffiliateMerchantStat";

/**
 * @link /v2/affiliate/merchant-stat
 */
export async function getV2AffiliateMerchantStat(
    params?: GetV2AffiliateMerchantStatQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AffiliateMerchantStatQueryResponse>["data"]> {
    const res = await client<GetV2AffiliateMerchantStatQueryResponse>({
        method: "get",
        url: `/v2/affiliate/merchant-stat`,
        params,
        ...options,
    });
    return res.data;
}
