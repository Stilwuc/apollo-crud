import type { MerchantAdminsDtoPagedResponseWithTotalCount } from "../MerchantAdminsDtoPagedResponseWithTotalCount";

export type GetV2AdminMerchantsQueryParams = {
    /**
     * @type string | undefined
     */
    name?: string;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
    /**
     * @type boolean | undefined
     */
    isDeleted?: boolean;
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
export type GetV2AdminMerchants200 =
    MerchantAdminsDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminMerchantsQueryResponse =
    MerchantAdminsDtoPagedResponseWithTotalCount;
export type GetV2AdminMerchantsQuery = {
    Response: GetV2AdminMerchantsQueryResponse;
    QueryParams: GetV2AdminMerchantsQueryParams;
};
