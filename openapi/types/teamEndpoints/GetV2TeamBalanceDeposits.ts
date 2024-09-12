import type { TeamDepositResponseDtoPagedResponseWithTotalCount } from "../TeamDepositResponseDtoPagedResponseWithTotalCount";

export type GetV2TeamBalanceDepositsQueryParams = {
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined, date
     */
    createdFrom?: string;
    /**
     * @type string | undefined, date
     */
    CreatedTo?: string;
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
export type GetV2TeamBalanceDeposits200 =
    TeamDepositResponseDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2TeamBalanceDepositsQueryResponse =
    TeamDepositResponseDtoPagedResponseWithTotalCount;
export type GetV2TeamBalanceDepositsQuery = {
    Response: GetV2TeamBalanceDepositsQueryResponse;
    QueryParams: GetV2TeamBalanceDepositsQueryParams;
};
