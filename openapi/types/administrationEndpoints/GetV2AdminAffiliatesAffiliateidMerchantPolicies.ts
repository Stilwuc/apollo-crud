import type { AffiliateMerchantPolicyResponseWithoutAffiliateElementPagedResponseWithTotalCount } from "../AffiliateMerchantPolicyResponseWithoutAffiliateElementPagedResponseWithTotalCount";

export type GetV2AdminAffiliatesAffiliateidMerchantPoliciesPathParams = {
    /**
     * @type integer, int64
     */
    affiliateId: number;
};
export type GetV2AdminAffiliatesAffiliateidMerchantPoliciesQueryParams = {
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type string | undefined
     */
    merchantName?: string;
    /**
     * @type string | undefined
     */
    currencyName?: string;
    /**
     * @type string | undefined
     */
    sortBy?: string;
};
/**
 * @description OK
 */
export type GetV2AdminAffiliatesAffiliateidMerchantPolicies200 =
    AffiliateMerchantPolicyResponseWithoutAffiliateElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminAffiliatesAffiliateidMerchantPoliciesQueryResponse =
    AffiliateMerchantPolicyResponseWithoutAffiliateElementPagedResponseWithTotalCount;
export type GetV2AdminAffiliatesAffiliateidMerchantPoliciesQuery = {
    Response: GetV2AdminAffiliatesAffiliateidMerchantPoliciesQueryResponse;
    PathParams: GetV2AdminAffiliatesAffiliateidMerchantPoliciesPathParams;
    QueryParams: GetV2AdminAffiliatesAffiliateidMerchantPoliciesQueryParams;
};
