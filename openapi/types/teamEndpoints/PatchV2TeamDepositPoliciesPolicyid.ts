import type { TeamDepositPolicyResponse } from "../TeamDepositPolicyResponse";
import type { UpdateTeamDepositPolicyRequest } from "../UpdateTeamDepositPolicyRequest";

export type PatchV2TeamDepositPoliciesPolicyidPathParams = {
    /**
     * @type integer, int64
     */
    policyId: number;
};
/**
 * @description OK
 */
export type PatchV2TeamDepositPoliciesPolicyid200 = TeamDepositPolicyResponse;
export type PatchV2TeamDepositPoliciesPolicyidMutationRequest =
    UpdateTeamDepositPolicyRequest;
/**
 * @description OK
 */
export type PatchV2TeamDepositPoliciesPolicyidMutationResponse =
    TeamDepositPolicyResponse;
export type PatchV2TeamDepositPoliciesPolicyidMutation = {
    Response: PatchV2TeamDepositPoliciesPolicyidMutationResponse;
    Request: PatchV2TeamDepositPoliciesPolicyidMutationRequest;
    PathParams: PatchV2TeamDepositPoliciesPolicyidPathParams;
};
