import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantTransactionsPaymentPageMutationRequest,
    PostV2MerchantTransactionsPaymentPageMutationResponse,
} from "../../types/merchantEndpoints/PostV2MerchantTransactionsPaymentPage";

/**
 * @link /v2/merchant/transactions/payment-page
 */
export async function postV2MerchantTransactionsPaymentPage(
    data?: PostV2MerchantTransactionsPaymentPageMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2MerchantTransactionsPaymentPageMutationResponse>["data"]
> {
    const res = await client<
        PostV2MerchantTransactionsPaymentPageMutationResponse,
        PostV2MerchantTransactionsPaymentPageMutationRequest
    >({
        method: "post",
        url: `/v2/merchant/transactions/payment-page`,
        data,
        ...options,
    });
    return res.data;
}
