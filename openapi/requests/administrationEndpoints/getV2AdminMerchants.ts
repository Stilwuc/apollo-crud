import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantsQueryResponse,
    GetV2AdminMerchantsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchants";

/**
 * @link /v2/admin/merchants
 */
export async function getV2AdminMerchants(
    params?: GetV2AdminMerchantsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminMerchantsQueryResponse>["data"]> {
    const res = await client<GetV2AdminMerchantsQueryResponse>({
        method: "get",
        url: `/v2/admin/merchants`,
        params,
        ...options,
    });
    return res.data;
}
