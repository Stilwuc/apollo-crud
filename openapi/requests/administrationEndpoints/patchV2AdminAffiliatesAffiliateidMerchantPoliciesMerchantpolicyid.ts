import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationRequest,
    PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationResponse,
    PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyid";

/**
 * @link /v2/admin/affiliates/:affiliateId/merchant-policies/:merchantPolicyId
 */
export async function patchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyid(
    affiliateId: PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidPathParams["affiliateId"],
    merchantPolicyId: PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidPathParams["merchantPolicyId"],
    data?: PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationResponse,
        PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/affiliates/${affiliateId}/merchant-policies/${merchantPolicyId}`,
        data,
        ...options,
    });
    return res.data;
}
