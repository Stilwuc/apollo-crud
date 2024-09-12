import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptMutationRequest,
    PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptMutationResponse,
    PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptPathParams,
} from "../../types/supportEndpoints/PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAccept";

/**
 * @link /v2/support/affiliates/:affiliateId/withdrawals/:withdrawalId/accept
 */
export async function postV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAccept(
    affiliateId: PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptPathParams["affiliateId"],
    withdrawalId: PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptPathParams["withdrawalId"],
    data?: PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptMutationResponse>["data"]
> {
    const res = await client<
        PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptMutationResponse,
        PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptMutationRequest
    >({
        method: "post",
        url: `/v2/support/affiliates/${affiliateId}/withdrawals/${withdrawalId}/accept`,
        data,
        ...options,
    });
    return res.data;
}
