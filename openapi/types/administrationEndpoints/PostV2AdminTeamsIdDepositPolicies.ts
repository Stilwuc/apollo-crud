import type { TeamDepositPolicyResult } from "../TeamDepositPolicyResult";
import type { CreateTeamDepositPolicyRequest } from "../CreateTeamDepositPolicyRequest";

export type PostV2AdminTeamsIdDepositPoliciesPathParams = {
    /**
     * @type string, uuid
     */
    id: string;
};
/**
 * @description OK
 */
export type PostV2AdminTeamsIdDepositPolicies200 = TeamDepositPolicyResult;
export type PostV2AdminTeamsIdDepositPoliciesMutationRequest =
    CreateTeamDepositPolicyRequest;
/**
 * @description OK
 */
export type PostV2AdminTeamsIdDepositPoliciesMutationResponse =
    TeamDepositPolicyResult;
export type PostV2AdminTeamsIdDepositPoliciesMutation = {
    Response: PostV2AdminTeamsIdDepositPoliciesMutationResponse;
    Request: PostV2AdminTeamsIdDepositPoliciesMutationRequest;
    PathParams: PostV2AdminTeamsIdDepositPoliciesPathParams;
};
