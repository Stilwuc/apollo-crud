import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTransactionsQueryResponse,
    GetV2AdminTransactionsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminTransactions";

/**
 * @link /v2/admin/transactions
 */
export async function getV2AdminTransactions(
    params?: GetV2AdminTransactionsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTransactionsQueryResponse>["data"]> {
    const res = await client<GetV2AdminTransactionsQueryResponse>({
        method: "get",
        url: `/v2/admin/transactions`,
        params,
        ...options,
    });
    return res.data;
}
