import type { PaymentProviderDepositPolicyDto } from "../PaymentProviderDepositPolicyDto";

export type GetV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
    /**
     * @type integer, int64
     */
    policyId: number;
};
/**
 * @description OK
 */
export type GetV2AdminPaymentProvidersIdDepositPoliciesPolicyid200 =
    PaymentProviderDepositPolicyDto;
/**
 * @description OK
 */
export type GetV2AdminPaymentProvidersIdDepositPoliciesPolicyidQueryResponse =
    PaymentProviderDepositPolicyDto;
export type GetV2AdminPaymentProvidersIdDepositPoliciesPolicyidQuery = {
    Response: GetV2AdminPaymentProvidersIdDepositPoliciesPolicyidQueryResponse;
    PathParams: GetV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams;
};
