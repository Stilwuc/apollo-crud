import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2MerchantAppealsIdQueryResponse,
    GetV2MerchantAppealsIdPathParams,
} from "../../types/merchantEndpoints/GetV2MerchantAppealsId";

/**
 * @link /v2/merchant/appeals/:id
 */
export async function getV2MerchantAppealsId(
    id: GetV2MerchantAppealsIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2MerchantAppealsIdQueryResponse>["data"]> {
    const res = await client<GetV2MerchantAppealsIdQueryResponse>({
        method: "get",
        url: `/v2/merchant/appeals/${id}`,
        ...options,
    });
    return res.data;
}
