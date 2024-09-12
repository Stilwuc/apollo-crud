import type { WithdrawalHistoryDtoPagedResponseWithTotalCount } from "../WithdrawalHistoryDtoPagedResponseWithTotalCount";

export type GetV2MerchantBalanceWithdrawalsQueryParams = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type string | undefined
     */
    status?: string;
    /**
     * @type string | undefined, date
     */
    createdFrom?: string;
    /**
     * @type string | undefined, date
     */
    createdTo?: string;
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
export type GetV2MerchantBalanceWithdrawals200 =
    WithdrawalHistoryDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2MerchantBalanceWithdrawalsQueryResponse =
    WithdrawalHistoryDtoPagedResponseWithTotalCount;
export type GetV2MerchantBalanceWithdrawalsQuery = {
    Response: GetV2MerchantBalanceWithdrawalsQueryResponse;
    QueryParams: GetV2MerchantBalanceWithdrawalsQueryParams;
};
