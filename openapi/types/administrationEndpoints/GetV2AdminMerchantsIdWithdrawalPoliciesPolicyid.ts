import type { MerchantWithdrawalPolicyResponseElement } from "../MerchantWithdrawalPolicyResponseElement";

export type GetV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams = {
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
export type GetV2AdminMerchantsIdWithdrawalPoliciesPolicyid200 =
    MerchantWithdrawalPolicyResponseElement;
/**
 * @description OK
 */
export type GetV2AdminMerchantsIdWithdrawalPoliciesPolicyidQueryResponse =
    MerchantWithdrawalPolicyResponseElement;
export type GetV2AdminMerchantsIdWithdrawalPoliciesPolicyidQuery = {
    Response: GetV2AdminMerchantsIdWithdrawalPoliciesPolicyidQueryResponse;
    PathParams: GetV2AdminMerchantsIdWithdrawalPoliciesPolicyidPathParams;
};
