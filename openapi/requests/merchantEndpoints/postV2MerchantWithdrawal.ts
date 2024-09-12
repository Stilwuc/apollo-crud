import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantWithdrawalMutationRequest,
    PostV2MerchantWithdrawalMutationResponse,
} from "../../types/merchantEndpoints/PostV2MerchantWithdrawal";

/**
 * @link /v2/merchant/withdrawal
 */
export async function postV2MerchantWithdrawal(
    data?: PostV2MerchantWithdrawalMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2MerchantWithdrawalMutationResponse>["data"]> {
    const res = await client<
        PostV2MerchantWithdrawalMutationResponse,
        PostV2MerchantWithdrawalMutationRequest
    >({ method: "post", url: `/v2/merchant/withdrawal`, data, ...options });
    return res.data;
}
