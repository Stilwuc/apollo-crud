import type { PaymentProviderDepositPolicyDto } from "../PaymentProviderDepositPolicyDto";
import type { CreatePaymentProviderDepositPolicyRequest } from "../CreatePaymentProviderDepositPolicyRequest";

export type PostV2AdminPaymentProvidersIdDepositPoliciesPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type PostV2AdminPaymentProvidersIdDepositPolicies200 =
    PaymentProviderDepositPolicyDto;
export type PostV2AdminPaymentProvidersIdDepositPoliciesMutationRequest =
    CreatePaymentProviderDepositPolicyRequest;
/**
 * @description OK
 */
export type PostV2AdminPaymentProvidersIdDepositPoliciesMutationResponse =
    PaymentProviderDepositPolicyDto;
export type PostV2AdminPaymentProvidersIdDepositPoliciesMutation = {
    Response: PostV2AdminPaymentProvidersIdDepositPoliciesMutationResponse;
    Request: PostV2AdminPaymentProvidersIdDepositPoliciesMutationRequest;
    PathParams: PostV2AdminPaymentProvidersIdDepositPoliciesPathParams;
};
