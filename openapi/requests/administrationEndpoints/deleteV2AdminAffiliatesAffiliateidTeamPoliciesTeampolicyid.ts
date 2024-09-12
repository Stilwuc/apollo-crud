import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationResponse,
    DeleteV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyid";

/**
 * @link /v2/admin/affiliates/:affiliateId/team-policies/:teamPolicyId
 */
export async function deleteV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyid(
    affiliateId: DeleteV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidPathParams["affiliateId"],
    teamPolicyId: DeleteV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidPathParams["teamPolicyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationResponse>(
            {
                method: "delete",
                url: `/v2/admin/affiliates/${affiliateId}/team-policies/${teamPolicyId}`,
                ...options,
            }
        );
    return res.data;
}
