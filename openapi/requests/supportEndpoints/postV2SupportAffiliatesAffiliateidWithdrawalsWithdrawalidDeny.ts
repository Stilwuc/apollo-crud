import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidDenyMutationResponse,
    PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidDenyPathParams,
} from "../../types/supportEndpoints/PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidDeny";

/**
 * @link /v2/support/affiliates/:affiliateId/withdrawals/:withdrawalId/deny
 */
export async function postV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidDeny(
    affiliateId: PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidDenyPathParams["affiliateId"],
    withdrawalId: PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidDenyPathParams["withdrawalId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidDenyMutationResponse>["data"]
> {
    const res =
        await client<PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidDenyMutationResponse>(
            {
                method: "post",
                url: `/v2/support/affiliates/${affiliateId}/withdrawals/${withdrawalId}/deny`,
                ...options,
            }
        );
    return res.data;
}
