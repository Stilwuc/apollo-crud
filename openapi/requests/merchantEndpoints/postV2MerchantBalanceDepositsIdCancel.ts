import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantBalanceDepositsIdCancelMutationResponse,
    PostV2MerchantBalanceDepositsIdCancelPathParams,
} from "../../types/merchantEndpoints/PostV2MerchantBalanceDepositsIdCancel";

/**
 * @link /v2/merchant/balance-deposits/:id/cancel
 */
export async function postV2MerchantBalanceDepositsIdCancel(
    id: PostV2MerchantBalanceDepositsIdCancelPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2MerchantBalanceDepositsIdCancelMutationResponse>["data"]
> {
    const res =
        await client<PostV2MerchantBalanceDepositsIdCancelMutationResponse>({
            method: "post",
            url: `/v2/merchant/balance-deposits/${id}/cancel`,
            ...options,
        });
    return res.data;
}
