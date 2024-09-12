import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamTransactionsTransactionidWithdrawalDeclineMutationResponse,
    PostV2TeamTransactionsTransactionidWithdrawalDeclinePathParams,
} from "../../types/teamEndpoints/PostV2TeamTransactionsTransactionidWithdrawalDecline";

/**
 * @link /v2/team/transactions/:transactionId/withdrawal-decline
 */
export async function postV2TeamTransactionsTransactionidWithdrawalDecline(
    transactionId: PostV2TeamTransactionsTransactionidWithdrawalDeclinePathParams["transactionId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamTransactionsTransactionidWithdrawalDeclineMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamTransactionsTransactionidWithdrawalDeclineMutationResponse>(
            {
                method: "post",
                url: `/v2/team/transactions/${transactionId}/withdrawal-decline`,
                ...options,
            }
        );
    return res.data;
}
