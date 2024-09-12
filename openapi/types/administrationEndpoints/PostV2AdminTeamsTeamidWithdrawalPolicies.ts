import type { TeamWithdrawalPolicyResult } from "../TeamWithdrawalPolicyResult";
import type { CreateTeamWithdrawalPolicyRequestBody } from "../CreateTeamWithdrawalPolicyRequestBody";

export type PostV2AdminTeamsTeamidWithdrawalPoliciesPathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
};
/**
 * @description OK
 */
export type PostV2AdminTeamsTeamidWithdrawalPolicies200 =
    TeamWithdrawalPolicyResult;
export type PostV2AdminTeamsTeamidWithdrawalPoliciesMutationRequest =
    CreateTeamWithdrawalPolicyRequestBody;
/**
 * @description OK
 */
export type PostV2AdminTeamsTeamidWithdrawalPoliciesMutationResponse =
    TeamWithdrawalPolicyResult;
export type PostV2AdminTeamsTeamidWithdrawalPoliciesMutation = {
    Response: PostV2AdminTeamsTeamidWithdrawalPoliciesMutationResponse;
    Request: PostV2AdminTeamsTeamidWithdrawalPoliciesMutationRequest;
    PathParams: PostV2AdminTeamsTeamidWithdrawalPoliciesPathParams;
};
