import type { TeamWithdrawalResponseElementPagedResponseWithTotalCount } from "../TeamWithdrawalResponseElementPagedResponseWithTotalCount";

export type GetV2AdminTeamWithdrawalsQueryParams = {
    /**
     * @type string | undefined, uuid
     */
    TeamId?: string;
    /**
     * @type string | undefined
     */
    TransactionHash?: string;
    /**
     * @type number | undefined, double
     */
    Amount?: number;
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type string | undefined
     */
    sortBy?: string;
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
/**
 * @description OK
 */
export type GetV2AdminTeamWithdrawals200 =
    TeamWithdrawalResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminTeamWithdrawalsQueryResponse =
    TeamWithdrawalResponseElementPagedResponseWithTotalCount;
export type GetV2AdminTeamWithdrawalsQuery = {
    Response: GetV2AdminTeamWithdrawalsQueryResponse;
    QueryParams: GetV2AdminTeamWithdrawalsQueryParams;
};
