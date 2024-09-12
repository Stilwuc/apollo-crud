import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportTransactionsTransactionidDenyMutationResponse,
    PostV2SupportTransactionsTransactionidDenyPathParams,
} from "../../types/supportEndpoints/PostV2SupportTransactionsTransactionidDeny";

/**
 * @link /v2/support/transactions/:transactionId/deny
 */
export async function postV2SupportTransactionsTransactionidDeny(
    transactionId: PostV2SupportTransactionsTransactionidDenyPathParams["transactionId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2SupportTransactionsTransactionidDenyMutationResponse>["data"]
> {
    const res =
        await client<PostV2SupportTransactionsTransactionidDenyMutationResponse>(
            {
                method: "post",
                url: `/v2/support/transactions/${transactionId}/deny`,
                ...options,
            }
        );
    return res.data;
}
