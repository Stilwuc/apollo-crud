import type { AffiliateMerchantPolicyResponseElement } from "./AffiliateMerchantPolicyResponseElement";

export type AffiliateMerchantPolicyResponseElementPagedResponseWithTotalCount =
    {
        /**
         * @type array | undefined
         */
        items?: AffiliateMerchantPolicyResponseElement[];
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
