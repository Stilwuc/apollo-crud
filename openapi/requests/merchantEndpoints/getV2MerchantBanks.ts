import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2MerchantBanksQueryResponse,
    GetV2MerchantBanksQueryParams,
} from "../../types/merchantEndpoints/GetV2MerchantBanks";

/**
 * @link /v2/merchant/banks
 */
export async function getV2MerchantBanks(
    params?: GetV2MerchantBanksQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2MerchantBanksQueryResponse>["data"]> {
    const res = await client<GetV2MerchantBanksQueryResponse>({
        method: "get",
        url: `/v2/merchant/banks`,
        params,
        ...options,
    });
    return res.data;
}
