import type { MerchantDepositResponseElement } from "./MerchantDepositResponseElement";

export type MerchantDepositResponseElementPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: MerchantDepositResponseElement[];
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
