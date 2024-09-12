import type { AffiliateTeamPolicyResponse } from "../AffiliateTeamPolicyResponse";
import type { AffiliateTeamPolicyUpdateRequest } from "../AffiliateTeamPolicyUpdateRequest";

export type PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidPathParams =
    {
        /**
         * @type integer, int64
         */
        affiliateId: number;
        /**
         * @type integer, int64
         */
        teamPolicyId: number;
    };
/**
 * @description OK
 */
export type PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyid200 =
    AffiliateTeamPolicyResponse;
export type PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationRequest =
    AffiliateTeamPolicyUpdateRequest;
/**
 * @description OK
 */
export type PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationResponse =
    AffiliateTeamPolicyResponse;
export type PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutation =
    {
        Response: PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationResponse;
        Request: PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidMutationRequest;
        PathParams: PatchV2AdminAffiliatesAffiliateidTeamPoliciesTeampolicyidPathParams;
    };
