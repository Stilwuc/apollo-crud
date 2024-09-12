import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTransactionsIdAcceptMutationResponse,
    PostV2AdminTransactionsIdAcceptPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTransactionsIdAccept";

/**
 * @link /v2/admin/transactions/:id/accept
 */
export async function postV2AdminTransactionsIdAccept(
    id: PostV2AdminTransactionsIdAcceptPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTransactionsIdAcceptMutationResponse>["data"]
> {
    const res = await client<PostV2AdminTransactionsIdAcceptMutationResponse>({
        method: "post",
        url: `/v2/admin/transactions/${id}/accept`,
        ...options,
    });
    return res.data;
}
