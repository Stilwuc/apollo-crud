import type { AffiliateMerchantPolicyResponseWithAffiliateElementPagedResponseWithTotalCount } from "../AffiliateMerchantPolicyResponseWithAffiliateElementPagedResponseWithTotalCount";

export type GetV2AdminAffiliateMerchantPoliciesQueryParams = {
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type integer | undefined, int64
     */
    affiliateId?: number;
    /**
     * @type string | undefined, uuid
     */
    merchantId?: string;
};
/**
 * @description OK
 */
export type GetV2AdminAffiliateMerchantPolicies200 =
    AffiliateMerchantPolicyResponseWithAffiliateElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminAffiliateMerchantPoliciesQueryResponse =
    AffiliateMerchantPolicyResponseWithAffiliateElementPagedResponseWithTotalCount;
export type GetV2AdminAffiliateMerchantPoliciesQuery = {
    Response: GetV2AdminAffiliateMerchantPoliciesQueryResponse;
    QueryParams: GetV2AdminAffiliateMerchantPoliciesQueryParams;
};
