import type { MerchantWithdrawalResponseElement } from "./MerchantWithdrawalResponseElement";

export type MerchantWithdrawalResponseElementPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: MerchantWithdrawalResponseElement[];
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
