import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminAffiliatesAffiliateidMerchantPoliciesMutationRequest,
    PostV2AdminAffiliatesAffiliateidMerchantPoliciesMutationResponse,
    PostV2AdminAffiliatesAffiliateidMerchantPoliciesPathParams,
} from "../../types/administrationEndpoints/PostV2AdminAffiliatesAffiliateidMerchantPolicies";

/**
 * @link /v2/admin/affiliates/:affiliateId/merchant-policies
 */
export async function postV2AdminAffiliatesAffiliateidMerchantPolicies(
    affiliateId: PostV2AdminAffiliatesAffiliateidMerchantPoliciesPathParams["affiliateId"],
    data?: PostV2AdminAffiliatesAffiliateidMerchantPoliciesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminAffiliatesAffiliateidMerchantPoliciesMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminAffiliatesAffiliateidMerchantPoliciesMutationResponse,
        PostV2AdminAffiliatesAffiliateidMerchantPoliciesMutationRequest
    >({
        method: "post",
        url: `/v2/admin/affiliates/${affiliateId}/merchant-policies`,
        data,
        ...options,
    });
    return res.data;
}
