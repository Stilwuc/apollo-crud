import type { AffiliateMerchantPolicyResponse } from "../AffiliateMerchantPolicyResponse";
import type { AffiliateMerchantPolicyUpdateRequest } from "../AffiliateMerchantPolicyUpdateRequest";

export type PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidPathParams =
    {
        /**
         * @type integer, int64
         */
        affiliateId: number;
        /**
         * @type integer, int64
         */
        merchantPolicyId: number;
    };
/**
 * @description OK
 */
export type PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyid200 =
    AffiliateMerchantPolicyResponse;
export type PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationRequest =
    AffiliateMerchantPolicyUpdateRequest;
/**
 * @description OK
 */
export type PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationResponse =
    AffiliateMerchantPolicyResponse;
export type PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutation =
    {
        Response: PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationResponse;
        Request: PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidMutationRequest;
        PathParams: PatchV2AdminAffiliatesAffiliateidMerchantPoliciesMerchantpolicyidPathParams;
    };
