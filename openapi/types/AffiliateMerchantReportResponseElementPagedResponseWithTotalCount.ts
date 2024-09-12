import type { AffiliateMerchantReportResponseElement } from "./AffiliateMerchantReportResponseElement";

export type AffiliateMerchantReportResponseElementPagedResponseWithTotalCount =
    {
        /**
         * @type array | undefined
         */
        items?: AffiliateMerchantReportResponseElement[];
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
