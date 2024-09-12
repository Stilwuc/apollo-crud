import type { TeamWithdrawalPolicyResult } from "../TeamWithdrawalPolicyResult";
import type { UpdateTeamWithdrawalPolicyRequestBody } from "../UpdateTeamWithdrawalPolicyRequestBody";

export type PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams = {
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
export type PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyid200 =
    TeamWithdrawalPolicyResult;
export type PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationRequest =
    UpdateTeamWithdrawalPolicyRequestBody;
/**
 * @description OK
 */
export type PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationResponse =
    TeamWithdrawalPolicyResult;
export type PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutation = {
    Response: PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationResponse;
    Request: PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationRequest;
    PathParams: PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams;
};
