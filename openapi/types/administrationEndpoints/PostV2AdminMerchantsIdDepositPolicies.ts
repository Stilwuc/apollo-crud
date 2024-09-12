import type { MerchantDepositPolicyResponseElement } from "../MerchantDepositPolicyResponseElement";
import type { CreateMerchantDepositPolicyRequestBody } from "../CreateMerchantDepositPolicyRequestBody";

export type PostV2AdminMerchantsIdDepositPoliciesPathParams = {
    /**
     * @type string, uuid
     */
    id: string;
};
/**
 * @description OK
 */
export type PostV2AdminMerchantsIdDepositPolicies200 =
    MerchantDepositPolicyResponseElement;
export type PostV2AdminMerchantsIdDepositPoliciesMutationRequest =
    CreateMerchantDepositPolicyRequestBody;
/**
 * @description OK
 */
export type PostV2AdminMerchantsIdDepositPoliciesMutationResponse =
    MerchantDepositPolicyResponseElement;
export type PostV2AdminMerchantsIdDepositPoliciesMutation = {
    Response: PostV2AdminMerchantsIdDepositPoliciesMutationResponse;
    Request: PostV2AdminMerchantsIdDepositPoliciesMutationRequest;
    PathParams: PostV2AdminMerchantsIdDepositPoliciesPathParams;
};
