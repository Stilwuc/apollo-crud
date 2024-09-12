import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantsIdBalanceTransactionsQueryResponse,
    GetV2AdminMerchantsIdBalanceTransactionsPathParams,
    GetV2AdminMerchantsIdBalanceTransactionsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchantsIdBalanceTransactions";

/**
 * @link /v2/admin/merchants/:id/balance-transactions
 */
export async function getV2AdminMerchantsIdBalanceTransactions(
    id: GetV2AdminMerchantsIdBalanceTransactionsPathParams["id"],
    params?: GetV2AdminMerchantsIdBalanceTransactionsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminMerchantsIdBalanceTransactionsQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminMerchantsIdBalanceTransactionsQueryResponse>({
            method: "get",
            url: `/v2/admin/merchants/${id}/balance-transactions`,
            params,
            ...options,
        });
    return res.data;
}
