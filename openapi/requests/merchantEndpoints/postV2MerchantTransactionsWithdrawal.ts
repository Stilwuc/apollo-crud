import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantTransactionsWithdrawalMutationRequest,
    PostV2MerchantTransactionsWithdrawalMutationResponse,
} from "../../types/merchantEndpoints/PostV2MerchantTransactionsWithdrawal";

/**
 * @link /v2/merchant/transactions/withdrawal
 */
export async function postV2MerchantTransactionsWithdrawal(
    data?: PostV2MerchantTransactionsWithdrawalMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2MerchantTransactionsWithdrawalMutationResponse>["data"]
> {
    const res = await client<
        PostV2MerchantTransactionsWithdrawalMutationResponse,
        PostV2MerchantTransactionsWithdrawalMutationRequest
    >({
        method: "post",
        url: `/v2/merchant/transactions/withdrawal`,
        data,
        ...options,
    });
    return res.data;
}
