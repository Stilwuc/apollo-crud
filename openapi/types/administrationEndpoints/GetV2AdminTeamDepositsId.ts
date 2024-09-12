import type { TeamDepositResponseElement } from "../TeamDepositResponseElement";

export type GetV2AdminTeamDepositsIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminTeamDepositsId200 = TeamDepositResponseElement;
/**
 * @description OK
 */
export type GetV2AdminTeamDepositsIdQueryResponse = TeamDepositResponseElement;
export type GetV2AdminTeamDepositsIdQuery = {
    Response: GetV2AdminTeamDepositsIdQueryResponse;
    PathParams: GetV2AdminTeamDepositsIdPathParams;
};
