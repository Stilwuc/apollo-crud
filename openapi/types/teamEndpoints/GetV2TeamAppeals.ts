import type { TeamAppellationResponsePagedResponseWithTotalCount } from "../TeamAppellationResponsePagedResponseWithTotalCount";

export type GetV2TeamAppealsQueryParams = {
    /**
     * @type integer | undefined, int64
     */
    transactionId?: number;
    /**
     * @type string | undefined
     */
    status?: string;
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
export type GetV2TeamAppeals200 =
    TeamAppellationResponsePagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2TeamAppealsQueryResponse =
    TeamAppellationResponsePagedResponseWithTotalCount;
export type GetV2TeamAppealsQuery = {
    Response: GetV2TeamAppealsQueryResponse;
    QueryParams: GetV2TeamAppealsQueryParams;
};
