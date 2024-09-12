import type { TeamDepositResponseElementPagedResponseWithTotalCount } from "../TeamDepositResponseElementPagedResponseWithTotalCount";

export type GetV2AdminTeamDepositsQueryParams = {
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
    /**
     * @type string | undefined
     */
    transactionHash?: string;
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
export type GetV2AdminTeamDeposits200 =
    TeamDepositResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminTeamDepositsQueryResponse =
    TeamDepositResponseElementPagedResponseWithTotalCount;
export type GetV2AdminTeamDepositsQuery = {
    Response: GetV2AdminTeamDepositsQueryResponse;
    QueryParams: GetV2AdminTeamDepositsQueryParams;
};
