import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantTransactionsIdCancelMutationResponse,
    PostV2MerchantTransactionsIdCancelPathParams,
} from "../../types/merchantEndpoints/PostV2MerchantTransactionsIdCancel";

/**
 * @link /v2/merchant/transactions/:id/cancel
 */
export async function postV2MerchantTransactionsIdCancel(
    id: PostV2MerchantTransactionsIdCancelPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2MerchantTransactionsIdCancelMutationResponse>["data"]
> {
    const res =
        await client<PostV2MerchantTransactionsIdCancelMutationResponse>({
            method: "post",
            url: `/v2/merchant/transactions/${id}/cancel`,
            ...options,
        });
    return res.data;
}
