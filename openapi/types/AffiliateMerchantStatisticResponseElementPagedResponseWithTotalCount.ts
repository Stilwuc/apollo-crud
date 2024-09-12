import type { AffiliateMerchantStatisticResponseElement } from "./AffiliateMerchantStatisticResponseElement";

export type AffiliateMerchantStatisticResponseElementPagedResponseWithTotalCount =
    {
        /**
         * @type array | undefined
         */
        items?: AffiliateMerchantStatisticResponseElement[];
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
