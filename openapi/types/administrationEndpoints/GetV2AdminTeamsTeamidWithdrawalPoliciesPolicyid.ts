import type { TeamWithdrawalPolicyResult } from "../TeamWithdrawalPolicyResult";

export type GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
    /**
     * @type integer, int64
     */
    policyId: number;
};
/**
 * @description OK
 */
export type GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyid200 =
    TeamWithdrawalPolicyResult;
/**
 * @description OK
 */
export type GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyidQueryResponse =
    TeamWithdrawalPolicyResult;
export type GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyidQuery = {
    Response: GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyidQueryResponse;
    PathParams: GetV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams;
};
