import type { TeamWithdrawalResponseElement } from "../TeamWithdrawalResponseElement";

export type GetV2AdminTeamWithdrawalsIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminTeamWithdrawalsId200 = TeamWithdrawalResponseElement;
/**
 * @description OK
 */
export type GetV2AdminTeamWithdrawalsIdQueryResponse =
    TeamWithdrawalResponseElement;
export type GetV2AdminTeamWithdrawalsIdQuery = {
    Response: GetV2AdminTeamWithdrawalsIdQueryResponse;
    PathParams: GetV2AdminTeamWithdrawalsIdPathParams;
};
