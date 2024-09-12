import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2MerchantTransactionsStatusQueryResponse,
    GetV2MerchantTransactionsStatusQueryParams,
} from "../../types/merchantEndpoints/GetV2MerchantTransactionsStatus";

/**
 * @link /v2/merchant/transactions/status
 */
export async function getV2MerchantTransactionsStatus(
    params: GetV2MerchantTransactionsStatusQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2MerchantTransactionsStatusQueryResponse>["data"]
> {
    const res = await client<GetV2MerchantTransactionsStatusQueryResponse>({
        method: "get",
        url: `/v2/merchant/transactions/status`,
        params,
        ...options,
    });
    return res.data;
}
