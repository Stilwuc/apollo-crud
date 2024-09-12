import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliateTeamPoliciesQueryResponse,
    GetV2AdminAffiliateTeamPoliciesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliateTeamPolicies";

/**
 * @link /v2/admin/affiliate-team-policies
 */
export async function getV2AdminAffiliateTeamPolicies(
    params?: GetV2AdminAffiliateTeamPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAffiliateTeamPoliciesQueryResponse>["data"]
> {
    const res = await client<GetV2AdminAffiliateTeamPoliciesQueryResponse>({
        method: "get",
        url: `/v2/admin/affiliate-team-policies`,
        params,
        ...options,
    });
    return res.data;
}
