import type { AffiliateWithdrawalResponseElement } from "./AffiliateWithdrawalResponseElement";

export type AffiliateWithdrawalResponseElementPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: AffiliateWithdrawalResponseElement[];
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
