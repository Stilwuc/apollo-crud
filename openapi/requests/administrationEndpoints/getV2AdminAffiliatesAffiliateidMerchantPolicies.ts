import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliatesAffiliateidMerchantPoliciesQueryResponse,
    GetV2AdminAffiliatesAffiliateidMerchantPoliciesPathParams,
    GetV2AdminAffiliatesAffiliateidMerchantPoliciesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliatesAffiliateidMerchantPolicies";

/**
 * @link /v2/admin/affiliates/:affiliateId/merchant-policies
 */
export async function getV2AdminAffiliatesAffiliateidMerchantPolicies(
    affiliateId: GetV2AdminAffiliatesAffiliateidMerchantPoliciesPathParams["affiliateId"],
    params?: GetV2AdminAffiliatesAffiliateidMerchantPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAffiliatesAffiliateidMerchantPoliciesQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminAffiliatesAffiliateidMerchantPoliciesQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/affiliates/${affiliateId}/merchant-policies`,
                params,
                ...options,
            }
        );
    return res.data;
}
