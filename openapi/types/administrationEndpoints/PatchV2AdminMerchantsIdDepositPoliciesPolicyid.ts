import type { MerchantDepositPolicyResponseElement } from "../MerchantDepositPolicyResponseElement";
import type { UpdateMerchantDepositPolicyRequestBody } from "../UpdateMerchantDepositPolicyRequestBody";

export type PatchV2AdminMerchantsIdDepositPoliciesPolicyidPathParams = {
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
export type PatchV2AdminMerchantsIdDepositPoliciesPolicyid200 =
    MerchantDepositPolicyResponseElement;
export type PatchV2AdminMerchantsIdDepositPoliciesPolicyidMutationRequest =
    UpdateMerchantDepositPolicyRequestBody;
/**
 * @description OK
 */
export type PatchV2AdminMerchantsIdDepositPoliciesPolicyidMutationResponse =
    MerchantDepositPolicyResponseElement;
export type PatchV2AdminMerchantsIdDepositPoliciesPolicyidMutation = {
    Response: PatchV2AdminMerchantsIdDepositPoliciesPolicyidMutationResponse;
    Request: PatchV2AdminMerchantsIdDepositPoliciesPolicyidMutationRequest;
    PathParams: PatchV2AdminMerchantsIdDepositPoliciesPolicyidPathParams;
};
