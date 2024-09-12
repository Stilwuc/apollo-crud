import type { MerchantWithdrawalPolicyResponseElement } from "../MerchantWithdrawalPolicyResponseElement";
import type { CreateMerchantWithdrawalPolicyRequestBody } from "../CreateMerchantWithdrawalPolicyRequestBody";

export type PostV2AdminMerchantsIdWithdrawalPoliciesPathParams = {
    /**
     * @type string, uuid
     */
    id: string;
};
/**
 * @description OK
 */
export type PostV2AdminMerchantsIdWithdrawalPolicies200 =
    MerchantWithdrawalPolicyResponseElement;
export type PostV2AdminMerchantsIdWithdrawalPoliciesMutationRequest =
    CreateMerchantWithdrawalPolicyRequestBody;
/**
 * @description OK
 */
export type PostV2AdminMerchantsIdWithdrawalPoliciesMutationResponse =
    MerchantWithdrawalPolicyResponseElement;
export type PostV2AdminMerchantsIdWithdrawalPoliciesMutation = {
    Response: PostV2AdminMerchantsIdWithdrawalPoliciesMutationResponse;
    Request: PostV2AdminMerchantsIdWithdrawalPoliciesMutationRequest;
    PathParams: PostV2AdminMerchantsIdWithdrawalPoliciesPathParams;
};
