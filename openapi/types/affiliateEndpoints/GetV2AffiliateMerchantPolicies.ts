import type { AffiliateMerchantPolicyResponseElementPagedResponseWithTotalCount } from "../AffiliateMerchantPolicyResponseElementPagedResponseWithTotalCount";

export type GetV2AffiliateMerchantPoliciesQueryParams = {
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
export type GetV2AffiliateMerchantPolicies200 =
    AffiliateMerchantPolicyResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AffiliateMerchantPoliciesQueryResponse =
    AffiliateMerchantPolicyResponseElementPagedResponseWithTotalCount;
export type GetV2AffiliateMerchantPoliciesQuery = {
    Response: GetV2AffiliateMerchantPoliciesQueryResponse;
    QueryParams: GetV2AffiliateMerchantPoliciesQueryParams;
};
