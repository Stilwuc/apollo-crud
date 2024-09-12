import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantWithdrawalsIdCancelMutationResponse,
    PostV2AdminMerchantWithdrawalsIdCancelPathParams,
} from "../../types/administrationEndpoints/PostV2AdminMerchantWithdrawalsIdCancel";

/**
 * @link /v2/admin/merchant-withdrawals/:id/cancel
 */
export async function postV2AdminMerchantWithdrawalsIdCancel(
    id: PostV2AdminMerchantWithdrawalsIdCancelPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminMerchantWithdrawalsIdCancelMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminMerchantWithdrawalsIdCancelMutationResponse>({
            method: "post",
            url: `/v2/admin/merchant-withdrawals/${id}/cancel`,
            ...options,
        });
    return res.data;
}
