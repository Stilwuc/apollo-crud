import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2MerchantTransactionsQueryResponse,
    GetV2MerchantTransactionsQueryParams,
} from "../../types/merchantEndpoints/GetV2MerchantTransactions";

/**
 * @link /v2/merchant/transactions
 */
export async function getV2MerchantTransactions(
    params?: GetV2MerchantTransactionsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2MerchantTransactionsQueryResponse>["data"]> {
    const res = await client<GetV2MerchantTransactionsQueryResponse>({
        method: "get",
        url: `/v2/merchant/transactions`,
        params,
        ...options,
    });
    return res.data;
}
