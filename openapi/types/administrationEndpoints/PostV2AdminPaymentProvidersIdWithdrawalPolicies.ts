import type { PaymentProviderWithdrawalPolicyDto } from "../PaymentProviderWithdrawalPolicyDto";
import type { CreatePaymentProviderWithdrawalPolicyRequest } from "../CreatePaymentProviderWithdrawalPolicyRequest";

export type PostV2AdminPaymentProvidersIdWithdrawalPoliciesPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type PostV2AdminPaymentProvidersIdWithdrawalPolicies200 =
    PaymentProviderWithdrawalPolicyDto;
export type PostV2AdminPaymentProvidersIdWithdrawalPoliciesMutationRequest =
    CreatePaymentProviderWithdrawalPolicyRequest;
/**
 * @description OK
 */
export type PostV2AdminPaymentProvidersIdWithdrawalPoliciesMutationResponse =
    PaymentProviderWithdrawalPolicyDto;
export type PostV2AdminPaymentProvidersIdWithdrawalPoliciesMutation = {
    Response: PostV2AdminPaymentProvidersIdWithdrawalPoliciesMutationResponse;
    Request: PostV2AdminPaymentProvidersIdWithdrawalPoliciesMutationRequest;
    PathParams: PostV2AdminPaymentProvidersIdWithdrawalPoliciesPathParams;
};
