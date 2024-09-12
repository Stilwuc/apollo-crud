import type { TeamDepositPolicyResponse } from "../TeamDepositPolicyResponse";

export type GetV2TeamDepositPoliciesPolicyidPathParams = {
    /**
     * @type integer, int64
     */
    policyId: number;
};
/**
 * @description OK
 */
export type GetV2TeamDepositPoliciesPolicyid200 = TeamDepositPolicyResponse;
/**
 * @description OK
 */
export type GetV2TeamDepositPoliciesPolicyidQueryResponse =
    TeamDepositPolicyResponse;
export type GetV2TeamDepositPoliciesPolicyidQuery = {
    Response: GetV2TeamDepositPoliciesPolicyidQueryResponse;
    PathParams: GetV2TeamDepositPoliciesPolicyidPathParams;
};
