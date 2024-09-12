import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantsMerchantidQueryResponse,
    GetV2AdminMerchantsMerchantidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchantsMerchantid";

/**
 * @link /v2/admin/merchants/:merchantId
 */
export async function getV2AdminMerchantsMerchantid(
    merchantId: GetV2AdminMerchantsMerchantidPathParams["merchantId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminMerchantsMerchantidQueryResponse>["data"]> {
    const res = await client<GetV2AdminMerchantsMerchantidQueryResponse>({
        method: "get",
        url: `/v2/admin/merchants/${merchantId}`,
        ...options,
    });
    return res.data;
}
