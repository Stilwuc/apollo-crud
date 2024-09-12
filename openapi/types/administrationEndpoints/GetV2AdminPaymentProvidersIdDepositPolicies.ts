import type { PaymentProviderDepositPolicyInfoDtoPagedResponseWithTotalCount } from "../PaymentProviderDepositPolicyInfoDtoPagedResponseWithTotalCount";

export type GetV2AdminPaymentProvidersIdDepositPoliciesPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
export type GetV2AdminPaymentProvidersIdDepositPoliciesQueryParams = {
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
export type GetV2AdminPaymentProvidersIdDepositPolicies200 =
    PaymentProviderDepositPolicyInfoDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminPaymentProvidersIdDepositPoliciesQueryResponse =
    PaymentProviderDepositPolicyInfoDtoPagedResponseWithTotalCount;
export type GetV2AdminPaymentProvidersIdDepositPoliciesQuery = {
    Response: GetV2AdminPaymentProvidersIdDepositPoliciesQueryResponse;
    PathParams: GetV2AdminPaymentProvidersIdDepositPoliciesPathParams;
    QueryParams: GetV2AdminPaymentProvidersIdDepositPoliciesQueryParams;
};
