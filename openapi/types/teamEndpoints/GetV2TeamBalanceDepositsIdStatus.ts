import type { TeamStatusDepositResponseDto } from "../TeamStatusDepositResponseDto";

export type GetV2TeamBalanceDepositsIdStatusPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2TeamBalanceDepositsIdStatus200 = TeamStatusDepositResponseDto;
/**
 * @description OK
 */
export type GetV2TeamBalanceDepositsIdStatusQueryResponse =
    TeamStatusDepositResponseDto;
export type GetV2TeamBalanceDepositsIdStatusQuery = {
    Response: GetV2TeamBalanceDepositsIdStatusQueryResponse;
    PathParams: GetV2TeamBalanceDepositsIdStatusPathParams;
};
