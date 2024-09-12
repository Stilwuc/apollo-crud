import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AffiliateMerchantPoliciesQueryResponse,
    GetV2AffiliateMerchantPoliciesQueryParams,
} from "../../types/affiliateEndpoints/GetV2AffiliateMerchantPolicies";

/**
 * @link /v2/affiliate/merchant-policies
 */
export async function getV2AffiliateMerchantPolicies(
    params?: GetV2AffiliateMerchantPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AffiliateMerchantPoliciesQueryResponse>["data"]
> {
    const res = await client<GetV2AffiliateMerchantPoliciesQueryResponse>({
        method: "get",
        url: `/v2/affiliate/merchant-policies`,
        params,
        ...options,
    });
    return res.data;
}
