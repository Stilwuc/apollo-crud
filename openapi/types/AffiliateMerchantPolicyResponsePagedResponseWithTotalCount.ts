import type { AffiliateMerchantPolicyResponse } from "./AffiliateMerchantPolicyResponse";

export type AffiliateMerchantPolicyResponsePagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: AffiliateMerchantPolicyResponse[];
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
