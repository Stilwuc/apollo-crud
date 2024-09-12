import type { MerchantWithdrawalPolicyResponseElement } from "../MerchantWithdrawalPolicyResponseElement";
import type { UpdateMerchantWithdrawalPolicyRequestBody } from "../UpdateMerchantWithdrawalPolicyRequestBody";

export type PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams = {
    /**
     * @type string, uuid
     */
    id: string;
    /**
     * @type integer, int64
     */
    policyId: number;
};
/**
 * @description OK
 */
export type PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyid200 =
    MerchantWithdrawalPolicyResponseElement;
export type PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationRequest =
    UpdateMerchantWithdrawalPolicyRequestBody;
/**
 * @description OK
 */
export type PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationResponse =
    MerchantWithdrawalPolicyResponseElement;
export type PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutation = {
    Response: PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationResponse;
    Request: PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidMutationRequest;
    PathParams: PatchV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams;
};
