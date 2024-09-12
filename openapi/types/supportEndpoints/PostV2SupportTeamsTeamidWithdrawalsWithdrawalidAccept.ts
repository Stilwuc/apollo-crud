import type { WithdrawalHashRequest } from "../WithdrawalHashRequest";

export type PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptPathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
    /**
     * @type integer, int64
     */
    withdrawalId: number;
};
/**
 * @description OK
 */
export type PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAccept200 = unknown;
export type PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptMutationRequest =
    WithdrawalHashRequest;
export type PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptMutationResponse =
    unknown;
export type PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptMutation = {
    Response: PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptMutationResponse;
    Request: PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptMutationRequest;
    PathParams: PostV2SupportTeamsTeamidWithdrawalsWithdrawalidAcceptPathParams;
};
