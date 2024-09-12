import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationRequest,
    PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationResponse,
    PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyid";

/**
 * @link /v2/admin/affiliates/:affiliateId/team-policies/:teamPolicyId
 */
export async function patchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyid(
    affiliateId: PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidPathParams["affiliateId"],
    teamPolicyId: PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidPathParams["teamPolicyId"],
    data?: PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationResponse,
        PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/affiliates/${affiliateId}/team-policies/${teamPolicyId}`,
        data,
        ...options,
    });
    return res.data;
}
