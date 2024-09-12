import type { ApplyTeamWithdrawalRequest } from "../ApplyTeamWithdrawalRequest";

export type PostV2AdminTeamWithdrawalsIdApplyPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type PostV2AdminTeamWithdrawalsIdApply200 = unknown;
export type PostV2AdminTeamWithdrawalsIdApplyMutationRequest =
    ApplyTeamWithdrawalRequest;
export type PostV2AdminTeamWithdrawalsIdApplyMutationResponse = unknown;
export type PostV2AdminTeamWithdrawalsIdApplyMutation = {
    Response: PostV2AdminTeamWithdrawalsIdApplyMutationResponse;
    Request: PostV2AdminTeamWithdrawalsIdApplyMutationRequest;
    PathParams: PostV2AdminTeamWithdrawalsIdApplyPathParams;
};
