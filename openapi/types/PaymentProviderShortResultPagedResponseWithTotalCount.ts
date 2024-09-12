import type { PaymentProviderShortResult } from "./PaymentProviderShortResult";

export type PaymentProviderShortResultPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: PaymentProviderShortResult[];
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
