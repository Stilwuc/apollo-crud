import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamTransactionsTransactionidAcceptMutationResponse,
    PostV2TeamTransactionsTransactionidAcceptPathParams,
} from "../../types/teamEndpoints/PostV2TeamTransactionsTransactionidAccept";

/**
 * @link /v2/team/transactions/:transactionId/accept
 */
export async function postV2TeamTransactionsTransactionidAccept(
    transactionId: PostV2TeamTransactionsTransactionidAcceptPathParams["transactionId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamTransactionsTransactionidAcceptMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamTransactionsTransactionidAcceptMutationResponse>(
            {
                method: "post",
                url: `/v2/team/transactions/${transactionId}/accept`,
                ...options,
            }
        );
    return res.data;
}
