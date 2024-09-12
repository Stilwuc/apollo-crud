import type { MerchantDepositPolicyResponseElement } from "./MerchantDepositPolicyResponseElement";

export type MerchantDepositPolicyResponseElementPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: MerchantDepositPolicyResponseElement[];
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
