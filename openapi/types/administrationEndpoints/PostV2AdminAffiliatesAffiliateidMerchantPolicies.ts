import type { AffiliateMerchantPolicyCreateRequest } from "../AffiliateMerchantPolicyCreateRequest";

export type PostV2AdminAffiliatesAffiliateidMerchantPoliciesPathParams = {
    /**
     * @type integer, int64
     */
    affiliateId: number;
};
/**
 * @description OK
 */
export type PostV2AdminAffiliatesAffiliateidMerchantPolicies200 = unknown;
export type PostV2AdminAffiliatesAffiliateidMerchantPoliciesMutationRequest =
    AffiliateMerchantPolicyCreateRequest;
export type PostV2AdminAffiliatesAffiliateidMerchantPoliciesMutationResponse =
    unknown;
export type PostV2AdminAffiliatesAffiliateidMerchantPoliciesMutation = {
    Response: PostV2AdminAffiliatesAffiliateidMerchantPoliciesMutationResponse;
    Request: PostV2AdminAffiliatesAffiliateidMerchantPoliciesMutationRequest;
    PathParams: PostV2AdminAffiliatesAffiliateidMerchantPoliciesPathParams;
};
