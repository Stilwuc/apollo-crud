import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTransactionsIdDeclineMutationResponse,
    PostV2AdminTransactionsIdDeclinePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTransactionsIdDecline";

/**
 * @link /v2/admin/transactions/:id/decline
 */
export async function postV2AdminTransactionsIdDecline(
    id: PostV2AdminTransactionsIdDeclinePathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTransactionsIdDeclineMutationResponse>["data"]
> {
    const res = await client<PostV2AdminTransactionsIdDeclineMutationResponse>({
        method: "post",
        url: `/v2/admin/transactions/${id}/decline`,
        ...options,
    });
    return res.data;
}
