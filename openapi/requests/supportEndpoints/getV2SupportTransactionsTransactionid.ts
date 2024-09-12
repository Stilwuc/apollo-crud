import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2SupportTransactionsTransactionidQueryResponse,
    GetV2SupportTransactionsTransactionidPathParams,
} from "../../types/supportEndpoints/GetV2SupportTransactionsTransactionid";

/**
 * @link /v2/support/transactions/:transactionId
 */
export async function getV2SupportTransactionsTransactionid(
    transactionId: GetV2SupportTransactionsTransactionidPathParams["transactionId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2SupportTransactionsTransactionidQueryResponse>["data"]
> {
    const res =
        await client<GetV2SupportTransactionsTransactionidQueryResponse>({
            method: "get",
            url: `/v2/support/transactions/${transactionId}`,
            ...options,
        });
    return res.data;
}
