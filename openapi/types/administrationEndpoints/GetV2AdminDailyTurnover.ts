import type { DailyTurnoverDtoPagedResponseWithTotalCount } from "../DailyTurnoverDtoPagedResponseWithTotalCount";

export type GetV2AdminDailyTurnoverQueryParams = {
    /**
     * @type string | undefined, date-time
     */
    day?: string;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type string | undefined
     */
    sortBy?: string;
};
/**
 * @description OK
 */
export type GetV2AdminDailyTurnover200 =
    DailyTurnoverDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminDailyTurnoverQueryResponse =
    DailyTurnoverDtoPagedResponseWithTotalCount;
export type GetV2AdminDailyTurnoverQuery = {
    Response: GetV2AdminDailyTurnoverQueryResponse;
    QueryParams: GetV2AdminDailyTurnoverQueryParams;
};
