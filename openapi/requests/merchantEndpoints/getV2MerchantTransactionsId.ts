import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2MerchantTransactionsIdQueryResponse,
    GetV2MerchantTransactionsIdPathParams,
} from "../../types/merchantEndpoints/GetV2MerchantTransactionsId";

/**
 * @link /v2/merchant/transactions/:id
 */
export async function getV2MerchantTransactionsId(
    id: GetV2MerchantTransactionsIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2MerchantTransactionsIdQueryResponse>["data"]> {
    const res = await client<GetV2MerchantTransactionsIdQueryResponse>({
        method: "get",
        url: `/v2/merchant/transactions/${id}`,
        ...options,
    });
    return res.data;
}
