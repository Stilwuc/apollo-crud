import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AffiliateWithdrawalMutationRequest,
    PostV2AffiliateWithdrawalMutationResponse,
} from "../../types/affiliateEndpoints/PostV2AffiliateWithdrawal";

/**
 * @link /v2/affiliate/withdrawal
 */
export async function postV2AffiliateWithdrawal(
    data?: PostV2AffiliateWithdrawalMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AffiliateWithdrawalMutationResponse>["data"]> {
    const res = await client<
        PostV2AffiliateWithdrawalMutationResponse,
        PostV2AffiliateWithdrawalMutationRequest
    >({ method: "post", url: `/v2/affiliate/withdrawal`, data, ...options });
    return res.data;
}
