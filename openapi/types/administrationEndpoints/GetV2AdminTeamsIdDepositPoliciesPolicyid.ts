import type { TeamDepositPolicyResult } from "../TeamDepositPolicyResult";

export type GetV2AdminTeamsIdDepositPoliciesPolicyidPathParams = {
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
export type GetV2AdminTeamsIdDepositPoliciesPolicyid200 =
    TeamDepositPolicyResult;
/**
 * @description OK
 */
export type GetV2AdminTeamsIdDepositPoliciesPolicyidQueryResponse =
    TeamDepositPolicyResult;
export type GetV2AdminTeamsIdDepositPoliciesPolicyidQuery = {
    Response: GetV2AdminTeamsIdDepositPoliciesPolicyidQueryResponse;
    PathParams: GetV2AdminTeamsIdDepositPoliciesPolicyidPathParams;
};
