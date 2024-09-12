import type { TeamWithdrawalPolicyResponse } from "../TeamWithdrawalPolicyResponse";
import type { UpdateTeamWithdrawalPolicyRequest } from "../UpdateTeamWithdrawalPolicyRequest";

export type PatchV2TeamWithdrawalPoliciesPolicyidPathParams = {
    /**
     * @type integer, int64
     */
    policyId: number;
};
/**
 * @description OK
 */
export type PatchV2TeamWithdrawalPoliciesPolicyid200 =
    TeamWithdrawalPolicyResponse;
export type PatchV2TeamWithdrawalPoliciesPolicyidMutationRequest =
    UpdateTeamWithdrawalPolicyRequest;
/**
 * @description OK
 */
export type PatchV2TeamWithdrawalPoliciesPolicyidMutationResponse =
    TeamWithdrawalPolicyResponse;
export type PatchV2TeamWithdrawalPoliciesPolicyidMutation = {
    Response: PatchV2TeamWithdrawalPoliciesPolicyidMutationResponse;
    Request: PatchV2TeamWithdrawalPoliciesPolicyidMutationRequest;
    PathParams: PatchV2TeamWithdrawalPoliciesPolicyidPathParams;
};
