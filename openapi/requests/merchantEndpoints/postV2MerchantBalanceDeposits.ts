import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantBalanceDepositsMutationRequest,
    PostV2MerchantBalanceDepositsMutationResponse,
} from "../../types/merchantEndpoints/PostV2MerchantBalanceDeposits";

/**
 * @link /v2/merchant/balance-deposits
 */
export async function postV2MerchantBalanceDeposits(
    data?: PostV2MerchantBalanceDepositsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2MerchantBalanceDepositsMutationResponse>["data"]
> {
    const res = await client<
        PostV2MerchantBalanceDepositsMutationResponse,
        PostV2MerchantBalanceDepositsMutationRequest
    >({
        method: "post",
        url: `/v2/merchant/balance-deposits`,
        data,
        ...options,
    });
    return res.data;
}
