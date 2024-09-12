import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTransactionsIdChangeAmountMutationRequest,
    PostV2AdminTransactionsIdChangeAmountMutationResponse,
    PostV2AdminTransactionsIdChangeAmountPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTransactionsIdChangeAmount";

/**
 * @link /v2/admin/transactions/:id/change-amount
 */
export async function postV2AdminTransactionsIdChangeAmount(
    id: PostV2AdminTransactionsIdChangeAmountPathParams["id"],
    data?: PostV2AdminTransactionsIdChangeAmountMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTransactionsIdChangeAmountMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminTransactionsIdChangeAmountMutationResponse,
        PostV2AdminTransactionsIdChangeAmountMutationRequest
    >({
        method: "post",
        url: `/v2/admin/transactions/${id}/change-amount`,
        data,
        ...options,
    });
    return res.data;
}
