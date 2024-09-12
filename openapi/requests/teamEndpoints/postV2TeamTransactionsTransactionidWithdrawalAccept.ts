import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamTransactionsTransactionidWithdrawalAcceptMutationResponse,
    PostV2TeamTransactionsTransactionidWithdrawalAcceptPathParams,
} from "../../types/teamEndpoints/PostV2TeamTransactionsTransactionidWithdrawalAccept";

/**
 * @link /v2/team/transactions/:transactionId/withdrawal-accept
 */
export async function postV2TeamTransactionsTransactionidWithdrawalAccept(
    transactionId: PostV2TeamTransactionsTransactionidWithdrawalAcceptPathParams["transactionId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamTransactionsTransactionidWithdrawalAcceptMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamTransactionsTransactionidWithdrawalAcceptMutationResponse>(
            {
                method: "post",
                url: `/v2/team/transactions/${transactionId}/withdrawal-accept`,
                ...options,
            }
        );
    return res.data;
}
