import type { MerchantDepositResponseDtoPagedResponseWithTotalCount } from "../MerchantDepositResponseDtoPagedResponseWithTotalCount";

export type GetV2MerchantBalanceDepositsQueryParams = {
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
export type GetV2MerchantBalanceDeposits200 =
    MerchantDepositResponseDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2MerchantBalanceDepositsQueryResponse =
    MerchantDepositResponseDtoPagedResponseWithTotalCount;
export type GetV2MerchantBalanceDepositsQuery = {
    Response: GetV2MerchantBalanceDepositsQueryResponse;
    QueryParams: GetV2MerchantBalanceDepositsQueryParams;
};
