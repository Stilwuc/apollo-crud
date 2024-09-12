import type { PaymentProviderWithdrawalPolicyDto } from "../PaymentProviderWithdrawalPolicyDto";
import type { UpdatePaymentProviderWithdrawalPolicyRequest } from "../UpdatePaymentProviderWithdrawalPolicyRequest";

export type PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams =
    {
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
export type PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyid200 =
    PaymentProviderWithdrawalPolicyDto;
export type PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationRequest =
    UpdatePaymentProviderWithdrawalPolicyRequest;
/**
 * @description OK
 */
export type PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationResponse =
    PaymentProviderWithdrawalPolicyDto;
export type PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutation = {
    Response: PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationResponse;
    Request: PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidMutationRequest;
    PathParams: PatchV2AdminPaymentProvidersIdWithdrawalPoliciesPolicyidPathParams;
};
