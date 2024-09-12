import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantTransactionsPaymentPageSelectMutationRequest,
    PostV2MerchantTransactionsPaymentPageSelectMutationResponse,
} from "../../types/merchantEndpoints/PostV2MerchantTransactionsPaymentPageSelect";

/**
 * @link /v2/merchant/transactions/payment-page-select
 */
export async function postV2MerchantTransactionsPaymentPageSelect(
    data?: PostV2MerchantTransactionsPaymentPageSelectMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2MerchantTransactionsPaymentPageSelectMutationResponse>["data"]
> {
    const res = await client<
        PostV2MerchantTransactionsPaymentPageSelectMutationResponse,
        PostV2MerchantTransactionsPaymentPageSelectMutationRequest
    >({
        method: "post",
        url: `/v2/merchant/transactions/payment-page-select`,
        data,
        ...options,
    });
    return res.data;
}
