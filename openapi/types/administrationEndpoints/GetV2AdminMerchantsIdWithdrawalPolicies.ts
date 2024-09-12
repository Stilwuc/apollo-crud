import type { MerchantWithdrawalPolicyResponseElementPagedResponseWithTotalCount } from "../MerchantWithdrawalPolicyResponseElementPagedResponseWithTotalCount";

export type GetV2AdminMerchantsIdWithdrawalPoliciesPathParams = {
    /**
     * @type string, uuid
     */
    id: string;
};
export type GetV2AdminMerchantsIdWithdrawalPoliciesQueryParams = {
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
export type GetV2AdminMerchantsIdWithdrawalPolicies200 =
    MerchantWithdrawalPolicyResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminMerchantsIdWithdrawalPoliciesQueryResponse =
    MerchantWithdrawalPolicyResponseElementPagedResponseWithTotalCount;
export type GetV2AdminMerchantsIdWithdrawalPoliciesQuery = {
    Response: GetV2AdminMerchantsIdWithdrawalPoliciesQueryResponse;
    PathParams: GetV2AdminMerchantsIdWithdrawalPoliciesPathParams;
    QueryParams: GetV2AdminMerchantsIdWithdrawalPoliciesQueryParams;
};
