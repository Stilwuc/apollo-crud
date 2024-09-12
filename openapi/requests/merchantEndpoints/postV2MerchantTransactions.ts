import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantTransactionsMutationRequest,
    PostV2MerchantTransactionsMutationResponse,
} from "../../types/merchantEndpoints/PostV2MerchantTransactions";

/**
 * @link /v2/merchant/transactions
 */
export async function postV2MerchantTransactions(
    data?: PostV2MerchantTransactionsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2MerchantTransactionsMutationResponse>["data"]> {
    const res = await client<
        PostV2MerchantTransactionsMutationResponse,
        PostV2MerchantTransactionsMutationRequest
    >({ method: "post", url: `/v2/merchant/transactions`, data, ...options });
    return res.data;
}
