import type { PaymentProviderDepositPolicyDto } from "../PaymentProviderDepositPolicyDto";
import type { UpdatePaymentProviderDepositPolicyRequest } from "../UpdatePaymentProviderDepositPolicyRequest";

export type PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams = {
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
export type PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyid200 =
    PaymentProviderDepositPolicyDto;
export type PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationRequest =
    UpdatePaymentProviderDepositPolicyRequest;
/**
 * @description OK
 */
export type PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationResponse =
    PaymentProviderDepositPolicyDto;
export type PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutation = {
    Response: PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationResponse;
    Request: PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidMutationRequest;
    PathParams: PatchV2AdminPaymentProvidersIdDepositPoliciesPolicyidPathParams;
};
