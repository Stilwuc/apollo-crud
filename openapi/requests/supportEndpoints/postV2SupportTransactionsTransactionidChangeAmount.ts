import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportTransactionsTransactionidChangeAmountMutationRequest,
    PostV2SupportTransactionsTransactionidChangeAmountMutationResponse,
    PostV2SupportTransactionsTransactionidChangeAmountPathParams,
} from "../../types/supportEndpoints/PostV2SupportTransactionsTransactionidChangeAmount";

/**
 * @link /v2/support/transactions/:transactionId/change-amount
 */
export async function postV2SupportTransactionsTransactionidChangeAmount(
    transactionId: PostV2SupportTransactionsTransactionidChangeAmountPathParams["transactionId"],
    data?: PostV2SupportTransactionsTransactionidChangeAmountMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2SupportTransactionsTransactionidChangeAmountMutationResponse>["data"]
> {
    const res = await client<
        PostV2SupportTransactionsTransactionidChangeAmountMutationResponse,
        PostV2SupportTransactionsTransactionidChangeAmountMutationRequest
    >({
        method: "post",
        url: `/v2/support/transactions/${transactionId}/change-amount`,
        data,
        ...options,
    });
    return res.data;
}
