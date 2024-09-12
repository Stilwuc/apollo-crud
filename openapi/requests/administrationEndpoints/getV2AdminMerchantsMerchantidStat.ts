import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantsMerchantidStatQueryResponse,
    GetV2AdminMerchantsMerchantidStatPathParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchantsMerchantidStat";

/**
 * @link /v2/admin/merchants/:merchantId/stat
 */
export async function getV2AdminMerchantsMerchantidStat(
    merchantId: GetV2AdminMerchantsMerchantidStatPathParams["merchantId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminMerchantsMerchantidStatQueryResponse>["data"]
> {
    const res = await client<GetV2AdminMerchantsMerchantidStatQueryResponse>({
        method: "get",
        url: `/v2/admin/merchants/${merchantId}/stat`,
        ...options,
    });
    return res.data;
}
