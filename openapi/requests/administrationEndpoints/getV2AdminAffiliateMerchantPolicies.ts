import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliateMerchantPoliciesQueryResponse,
    GetV2AdminAffiliateMerchantPoliciesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliateMerchantPolicies";

/**
 * @link /v2/admin/affiliate-merchant-policies
 */
export async function getV2AdminAffiliateMerchantPolicies(
    params?: GetV2AdminAffiliateMerchantPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAffiliateMerchantPoliciesQueryResponse>["data"]
> {
    const res = await client<GetV2AdminAffiliateMerchantPoliciesQueryResponse>({
        method: "get",
        url: `/v2/admin/affiliate-merchant-policies`,
        params,
        ...options,
    });
    return res.data;
}
