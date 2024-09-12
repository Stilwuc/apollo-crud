import type { PaymentProviderWithdrawalPolicyDto } from "../PaymentProviderWithdrawalPolicyDto";

export type GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams = {
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
export type GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyid200 =
    PaymentProviderWithdrawalPolicyDto;
/**
 * @description OK
 */
export type GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidQueryResponse =
    PaymentProviderWithdrawalPolicyDto;
export type GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidQuery = {
    Response: GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidQueryResponse;
    PathParams: GetV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams;
};
