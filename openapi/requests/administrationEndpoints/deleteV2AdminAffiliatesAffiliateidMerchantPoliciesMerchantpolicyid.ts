import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationResponse,
    DeleteV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyid";

/**
 * @link /v2/admin/affiliates/:affiliateId/merchant-policies/:merchantPolicyId
 */
export async function deleteV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyid(
    affiliateId: DeleteV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidPathParams["affiliateId"],
    merchantPolicyId: DeleteV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidPathParams["merchantPolicyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationResponse>(
            {
                method: "delete",
                url: `/v2/admin/affiliates/${affiliateId}/merchant-policies/${merchantPolicyId}`,
                ...options,
            }
        );
    return res.data;
}
