import type { AppellationStatusResponsePagedResponseWithTotalCount } from "../AppellationStatusResponsePagedResponseWithTotalCount";

export type GetV2MerchantAppealsStatusesQueryParams = {
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
    ids?: string;
};
/**
 * @description OK
 */
export type GetV2MerchantAppealsStatuses200 =
    AppellationStatusResponsePagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2MerchantAppealsStatusesQueryResponse =
    AppellationStatusResponsePagedResponseWithTotalCount;
export type GetV2MerchantAppealsStatusesQuery = {
    Response: GetV2MerchantAppealsStatusesQueryResponse;
    QueryParams: GetV2MerchantAppealsStatusesQueryParams;
};
