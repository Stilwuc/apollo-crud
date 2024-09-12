import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamTransactionsQueryResponse,
    GetV2TeamTransactionsQueryParams,
} from "../../types/teamEndpoints/GetV2TeamTransactions";

/**
 * @link /v2/team/transactions
 */
export async function getV2TeamTransactions(
    params?: GetV2TeamTransactionsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamTransactionsQueryResponse>["data"]> {
    const res = await client<GetV2TeamTransactionsQueryResponse>({
        method: "get",
        url: `/v2/team/transactions`,
        params,
        ...options,
    });
    return res.data;
}
