import type { AffiliateWithdrawalResponse } from "./AffiliateWithdrawalResponse";

export type AffiliateWithdrawalResponsePagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: AffiliateWithdrawalResponse[];
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
