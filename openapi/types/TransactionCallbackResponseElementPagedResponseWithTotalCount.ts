import type { TransactionCallbackResponseElement } from "./TransactionCallbackResponseElement";

export type TransactionCallbackResponseElementPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: TransactionCallbackResponseElement[];
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
