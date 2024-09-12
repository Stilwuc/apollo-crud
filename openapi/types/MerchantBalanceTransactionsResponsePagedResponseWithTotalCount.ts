import type { MerchantBalanceTransactionsResponse } from "./MerchantBalanceTransactionsResponse";

export type MerchantBalanceTransactionsResponsePagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: MerchantBalanceTransactionsResponse[];
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type integer | undefined, int32
     */
    totalCount?: number;
    /**
     * @type integer | undefined, int32
     */
    readonly pageCount?: number;
};
