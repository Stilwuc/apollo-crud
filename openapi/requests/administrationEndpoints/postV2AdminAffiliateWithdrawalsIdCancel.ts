import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminAffiliateWithdrawalsIdCancelMutationResponse,
    PostV2AdminAffiliateWithdrawalsIdCancelPathParams,
} from "../../types/administrationEndpoints/PostV2AdminAffiliateWithdrawalsIdCancel";

/**
 * @link /v2/admin/affiliate-withdrawals/:id/cancel
 */
export async function postV2AdminAffiliateWithdrawalsIdCancel(
    id: PostV2AdminAffiliateWithdrawalsIdCancelPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminAffiliateWithdrawalsIdCancelMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminAffiliateWithdrawalsIdCancelMutationResponse>({
            method: "post",
            url: `/v2/admin/affiliate-withdrawals/${id}/cancel`,
            ...options,
        });
    return res.data;
}
