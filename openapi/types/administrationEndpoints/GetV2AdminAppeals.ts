import type { AdminAppellationResponsePagedResponseWithTotalCount } from "../AdminAppellationResponsePagedResponseWithTotalCount";

export type GetV2AdminAppealsQueryParams = {
    /**
     * @type integer | undefined, int64
     */
    transactionId?: number;
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
    /**
     * @type string | undefined, uuid
     */
    merchantId?: string;
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
export type GetV2AdminAppeals200 =
    AdminAppellationResponsePagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminAppealsQueryResponse =
    AdminAppellationResponsePagedResponseWithTotalCount;
export type GetV2AdminAppealsQuery = {
    Response: GetV2AdminAppealsQueryResponse;
    QueryParams: GetV2AdminAppealsQueryParams;
};
