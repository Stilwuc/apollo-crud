import type { TeamDepositPolicyResult } from "../TeamDepositPolicyResult";
import type { UpdateAdminTeamDepositPolicyRequest } from "../UpdateAdminTeamDepositPolicyRequest";

export type PatchV2AdminTeamsIdDepositPoliciesPolicyidPathParams = {
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
export type PatchV2AdminTeamsIdDepositPoliciesPolicyid200 =
    TeamDepositPolicyResult;
export type PatchV2AdminTeamsIdDepositPoliciesPolicyidMutationRequest =
    UpdateAdminTeamDepositPolicyRequest;
/**
 * @description OK
 */
export type PatchV2AdminTeamsIdDepositPoliciesPolicyidMutationResponse =
    TeamDepositPolicyResult;
export type PatchV2AdminTeamsIdDepositPoliciesPolicyidMutation = {
    Response: PatchV2AdminTeamsIdDepositPoliciesPolicyidMutationResponse;
    Request: PatchV2AdminTeamsIdDepositPoliciesPolicyidMutationRequest;
    PathParams: PatchV2AdminTeamsIdDepositPoliciesPolicyidPathParams;
};
