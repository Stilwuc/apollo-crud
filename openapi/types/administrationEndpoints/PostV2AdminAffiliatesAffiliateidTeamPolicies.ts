import type { AffiliateTeamPolicyCreateRequest } from "../AffiliateTeamPolicyCreateRequest";

export type PostV2AdminAffiliatesAffiliateidTeamPoliciesPathParams = {
    /**
     * @type integer, int64
     */
    affiliateId: number;
};
/**
 * @description OK
 */
export type PostV2AdminAffiliatesAffiliateidTeamPolicies200 = unknown;
export type PostV2AdminAffiliatesAffiliateidTeamPoliciesMutationRequest =
    AffiliateTeamPolicyCreateRequest;
export type PostV2AdminAffiliatesAffiliateidTeamPoliciesMutationResponse =
    unknown;
export type PostV2AdminAffiliatesAffiliateidTeamPoliciesMutation = {
    Response: PostV2AdminAffiliatesAffiliateidTeamPoliciesMutationResponse;
    Request: PostV2AdminAffiliatesAffiliateidTeamPoliciesMutationRequest;
    PathParams: PostV2AdminAffiliatesAffiliateidTeamPoliciesPathParams;
};
