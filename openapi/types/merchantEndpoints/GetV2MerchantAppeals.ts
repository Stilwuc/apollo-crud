import type { AppellationResponsePagedResponseWithTotalCount } from "../AppellationResponsePagedResponseWithTotalCount";

export type GetV2MerchantAppealsQueryParams = {
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
export type GetV2MerchantAppeals200 =
    AppellationResponsePagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2MerchantAppealsQueryResponse =
    AppellationResponsePagedResponseWithTotalCount;
export type GetV2MerchantAppealsQuery = {
    Response: GetV2MerchantAppealsQueryResponse;
    QueryParams: GetV2MerchantAppealsQueryParams;
};
