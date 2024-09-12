import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminAffiliateWithdrawalsIdApplyMutationRequest,
    PostV2AdminAffiliateWithdrawalsIdApplyMutationResponse,
    PostV2AdminAffiliateWithdrawalsIdApplyPathParams,
} from "../../types/administrationEndpoints/PostV2AdminAffiliateWithdrawalsIdApply";

/**
 * @link /v2/admin/affiliate-withdrawals/:id/apply
 */
export async function postV2AdminAffiliateWithdrawalsIdApply(
    id: PostV2AdminAffiliateWithdrawalsIdApplyPathParams["id"],
    data?: PostV2AdminAffiliateWithdrawalsIdApplyMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminAffiliateWithdrawalsIdApplyMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminAffiliateWithdrawalsIdApplyMutationResponse,
        PostV2AdminAffiliateWithdrawalsIdApplyMutationRequest
    >({
        method: "post",
        url: `/v2/admin/affiliate-withdrawals/${id}/apply`,
        data,
        ...options,
    });
    return res.data;
}
