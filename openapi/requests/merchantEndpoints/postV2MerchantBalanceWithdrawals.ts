import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantBalanceWithdrawalsMutationRequest,
    PostV2MerchantBalanceWithdrawalsMutationResponse,
} from "../../types/merchantEndpoints/PostV2MerchantBalanceWithdrawals";

/**
 * @link /v2/merchant/balance-withdrawals
 */
export async function postV2MerchantBalanceWithdrawals(
    data?: PostV2MerchantBalanceWithdrawalsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2MerchantBalanceWithdrawalsMutationResponse>["data"]
> {
    const res = await client<
        PostV2MerchantBalanceWithdrawalsMutationResponse,
        PostV2MerchantBalanceWithdrawalsMutationRequest
    >({
        method: "post",
        url: `/v2/merchant/balance-withdrawals`,
        data,
        ...options,
    });
    return res.data;
}
