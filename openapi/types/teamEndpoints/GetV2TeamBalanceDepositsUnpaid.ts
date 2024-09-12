import type { TeamPendingDepositResponseDto } from "../TeamPendingDepositResponseDto";

/**
 * @description OK
 */
export type GetV2TeamBalanceDepositsUnpaid200 = TeamPendingDepositResponseDto;
/**
 * @description OK
 */
export type GetV2TeamBalanceDepositsUnpaidQueryResponse =
    TeamPendingDepositResponseDto;
export type GetV2TeamBalanceDepositsUnpaidQuery = {
    Response: GetV2TeamBalanceDepositsUnpaidQueryResponse;
};
