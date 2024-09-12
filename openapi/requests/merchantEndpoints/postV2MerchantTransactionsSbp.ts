import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantTransactionsSbpMutationRequest,
    PostV2MerchantTransactionsSbpMutationResponse,
} from "../../types/merchantEndpoints/PostV2MerchantTransactionsSbp";

/**
 * @link /v2/merchant/transactions/sbp
 */
export async function postV2MerchantTransactionsSbp(
    data?: PostV2MerchantTransactionsSbpMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2MerchantTransactionsSbpMutationResponse>["data"]
> {
    const res = await client<
        PostV2MerchantTransactionsSbpMutationResponse,
        PostV2MerchantTransactionsSbpMutationRequest
    >({
        method: "post",
        url: `/v2/merchant/transactions/sbp`,
        data,
        ...options,
    });
    return res.data;
}
