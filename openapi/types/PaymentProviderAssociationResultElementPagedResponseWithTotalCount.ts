import type { PaymentProviderAssociationResultElement } from "./PaymentProviderAssociationResultElement";

export type PaymentProviderAssociationResultElementPagedResponseWithTotalCount =
    {
        /**
         * @type array | undefined
         */
        items?: PaymentProviderAssociationResultElement[];
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
