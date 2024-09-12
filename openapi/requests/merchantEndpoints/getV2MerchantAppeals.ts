import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2MerchantAppealsQueryResponse,
    GetV2MerchantAppealsQueryParams,
} from "../../types/merchantEndpoints/GetV2MerchantAppeals";

/**
 * @link /v2/merchant/appeals
 */
export async function getV2MerchantAppeals(
    params?: GetV2MerchantAppealsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2MerchantAppealsQueryResponse>["data"]> {
    const res = await client<GetV2MerchantAppealsQueryResponse>({
        method: "get",
        url: `/v2/merchant/appeals`,
        params,
        ...options,
    });
    return res.data;
}
