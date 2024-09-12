import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantWithdrawalsIdApplyMutationRequest,
    PostV2AdminMerchantWithdrawalsIdApplyMutationResponse,
    PostV2AdminMerchantWithdrawalsIdApplyPathParams,
} from "../../types/administrationEndpoints/PostV2AdminMerchantWithdrawalsIdApply";

/**
 * @link /v2/admin/merchant-withdrawals/:id/apply
 */
export async function postV2AdminMerchantWithdrawalsIdApply(
    id: PostV2AdminMerchantWithdrawalsIdApplyPathParams["id"],
    data?: PostV2AdminMerchantWithdrawalsIdApplyMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminMerchantWithdrawalsIdApplyMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminMerchantWithdrawalsIdApplyMutationResponse,
        PostV2AdminMerchantWithdrawalsIdApplyMutationRequest
    >({
        method: "post",
        url: `/v2/admin/merchant-withdrawals/${id}/apply`,
        data,
        ...options,
    });
    return res.data;
}
