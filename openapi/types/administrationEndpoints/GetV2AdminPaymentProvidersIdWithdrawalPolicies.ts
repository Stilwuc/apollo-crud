import type { PaymentProviderWithdrawalPolicyInfoDtoPagedResponseWithTotalCount } from "../PaymentProviderWithdrawalPolicyInfoDtoPagedResponseWithTotalCount";

export type GetV2AdminPaymentProvidersIdWithdrawalPoliciesPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
export type GetV2AdminPaymentProvidersIdWithdrawalPoliciesQueryParams = {
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
export type GetV2AdminPaymentProvidersIdWithdrawalPolicies200 =
    PaymentProviderWithdrawalPolicyInfoDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminPaymentProvidersIdWithdrawalPoliciesQueryResponse =
    PaymentProviderWithdrawalPolicyInfoDtoPagedResponseWithTotalCount;
export type GetV2AdminPaymentProvidersIdWithdrawalPoliciesQuery = {
    Response: GetV2AdminPaymentProvidersIdWithdrawalPoliciesQueryResponse;
    PathParams: GetV2AdminPaymentProvidersIdWithdrawalPoliciesPathParams;
    QueryParams: GetV2AdminPaymentProvidersIdWithdrawalPoliciesQueryParams;
};
