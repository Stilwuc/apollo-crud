import type { MerchantDepositPolicyResponseElementPagedResponseWithTotalCount } from "../MerchantDepositPolicyResponseElementPagedResponseWithTotalCount";

export type GetV2AdminMerchantsIdDepositPoliciesPathParams = {
    /**
     * @type string, uuid
     */
    id: string;
};
export type GetV2AdminMerchantsIdDepositPoliciesQueryParams = {
    /**
     * @type string | undefined
     */
    currencies?: string;
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
/**
 * @description OK
 */
export type GetV2AdminMerchantsIdDepositPolicies200 =
    MerchantDepositPolicyResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminMerchantsIdDepositPoliciesQueryResponse =
    MerchantDepositPolicyResponseElementPagedResponseWithTotalCount;
export type GetV2AdminMerchantsIdDepositPoliciesQuery = {
    Response: GetV2AdminMerchantsIdDepositPoliciesQueryResponse;
    PathParams: GetV2AdminMerchantsIdDepositPoliciesPathParams;
    QueryParams: GetV2AdminMerchantsIdDepositPoliciesQueryParams;
};
