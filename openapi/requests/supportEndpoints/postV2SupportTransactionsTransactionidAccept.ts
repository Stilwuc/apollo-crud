import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportTransactionsTransactionidAcceptMutationRequest,
    PostV2SupportTransactionsTransactionidAcceptMutationResponse,
    PostV2SupportTransactionsTransactionidAcceptPathParams,
} from "../../types/supportEndpoints/PostV2SupportTransactionsTransactionidAccept";

/**
 * @link /v2/support/transactions/:transactionId/accept
 */
export async function postV2SupportTransactionsTransactionidAccept(
    transactionId: PostV2SupportTransactionsTransactionidAcceptPathParams["transactionId"],
    data?: PostV2SupportTransactionsTransactionidAcceptMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2SupportTransactionsTransactionidAcceptMutationResponse>["data"]
> {
    const res = await client<
        PostV2SupportTransactionsTransactionidAcceptMutationResponse,
        PostV2SupportTransactionsTransactionidAcceptMutationRequest
    >({
        method: "post",
        url: `/v2/support/transactions/${transactionId}/accept`,
        data,
        ...options,
    });
    return res.data;
}
