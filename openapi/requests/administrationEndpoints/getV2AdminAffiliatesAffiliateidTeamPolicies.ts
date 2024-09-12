import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliatesAffiliateidTeamPoliciesQueryResponse,
    GetV2AdminAffiliatesAffiliateidTeamPoliciesPathParams,
    GetV2AdminAffiliatesAffiliateidTeamPoliciesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliatesAffiliateidTeamPolicies";

/**
 * @link /v2/admin/affiliates/:affiliateId/team-policies
 */
export async function getV2AdminAffiliatesAffiliateidTeamPolicies(
    affiliateId: GetV2AdminAffiliatesAffiliateidTeamPoliciesPathParams["affiliateId"],
    params?: GetV2AdminAffiliatesAffiliateidTeamPoliciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAffiliatesAffiliateidTeamPoliciesQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminAffiliatesAffiliateidTeamPoliciesQueryResponse>({
            method: "get",
            url: `/v2/admin/affiliates/${affiliateId}/team-policies`,
            params,
            ...options,
        });
    return res.data;
}
