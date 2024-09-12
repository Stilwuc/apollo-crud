import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2MostbetTransactionsStatusTransactionidQueryResponse,
    GetV2MostbetTransactionsStatusTransactionidPathParams,
} from "../../types/mostbet/GetV2MostbetTransactionsStatusTransactionid";

/**
 * @link /v2/mostbet/transactions/status/:transactionId
 */
export async function getV2MostbetTransactionsStatusTransactionid(
    transactionId: GetV2MostbetTransactionsStatusTransactionidPathParams["transactionId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2MostbetTransactionsStatusTransactionidQueryResponse>["data"]
> {
    const res =
        await client<GetV2MostbetTransactionsStatusTransactionidQueryResponse>({
            method: "get",
            url: `/v2/mostbet/transactions/status/${transactionId}`,
            ...options,
        });
    return res.data;
}
