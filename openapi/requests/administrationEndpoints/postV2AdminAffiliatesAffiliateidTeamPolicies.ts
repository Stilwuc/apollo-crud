import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminAffiliatesAffiliateidTeamPoliciesMutationRequest,
    PostV2AdminAffiliatesAffiliateidTeamPoliciesMutationResponse,
    PostV2AdminAffiliatesAffiliateidTeamPoliciesPathParams,
} from "../../types/administrationEndpoints/PostV2AdminAffiliatesAffiliateidTeamPolicies";

/**
 * @link /v2/admin/affiliates/:affiliateId/team-policies
 */
export async function postV2AdminAffiliatesAffiliateidTeamPolicies(
    affiliateId: PostV2AdminAffiliatesAffiliateidTeamPoliciesPathParams["affiliateId"],
    data?: PostV2AdminAffiliatesAffiliateidTeamPoliciesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminAffiliatesAffiliateidTeamPoliciesMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminAffiliatesAffiliateidTeamPoliciesMutationResponse,
        PostV2AdminAffiliatesAffiliateidTeamPoliciesMutationRequest
    >({
        method: "post",
        url: `/v2/admin/affiliates/${affiliateId}/team-policies`,
        data,
        ...options,
    });
    return res.data;
}
