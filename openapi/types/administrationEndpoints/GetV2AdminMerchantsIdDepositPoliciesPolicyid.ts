import type { MerchantDepositPolicyResponseElement } from "../MerchantDepositPolicyResponseElement";

export type GetV2AdminMerchantsIdDepositPoliciesPolicyidPathParams = {
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
export type GetV2AdminMerchantsIdDepositPoliciesPolicyid200 =
    MerchantDepositPolicyResponseElement;
/**
 * @description OK
 */
export type GetV2AdminMerchantsIdDepositPoliciesPolicyidQueryResponse =
    MerchantDepositPolicyResponseElement;
export type GetV2AdminMerchantsIdDepositPoliciesPolicyidQuery = {
    Response: GetV2AdminMerchantsIdDepositPoliciesPolicyidQueryResponse;
    PathParams: GetV2AdminMerchantsIdDepositPoliciesPolicyidPathParams;
};
