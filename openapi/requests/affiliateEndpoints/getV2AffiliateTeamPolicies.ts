import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AffiliateTeamPoliciesQueryResponse,
    GetV2AffiliateTeamPoliciesQueryParams,
} from "../../types/affiliateEndpoints/GetV2AffiliateTeamPolicies";

/**
 * @link /v2/affiliate/team-policies
 */
export async function getV2AffiliateTeamPolicies(
    params?: GetV2AffiliateTeamPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AffiliateTeamPoliciesQueryResponse>["data"]> {
    const res = await client<GetV2AffiliateTeamPoliciesQueryResponse>({
        method: "get",
        url: `/v2/affiliate/team-policies`,
        params,
        ...options,
    });
    return res.data;
}
