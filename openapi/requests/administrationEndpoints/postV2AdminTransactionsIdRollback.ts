import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTransactionsIdRollbackMutationResponse,
    PostV2AdminTransactionsIdRollbackPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTransactionsIdRollback";

/**
 * @link /v2/admin/transactions/:id/rollback
 */
export async function postV2AdminTransactionsIdRollback(
    id: PostV2AdminTransactionsIdRollbackPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTransactionsIdRollbackMutationResponse>["data"]
> {
    const res = await client<PostV2AdminTransactionsIdRollbackMutationResponse>(
        {
            method: "post",
            url: `/v2/admin/transactions/${id}/rollback`,
            ...options,
        }
    );
    return res.data;
}
