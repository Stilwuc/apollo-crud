import type { TeamDepositResponseElement } from "./TeamDepositResponseElement";

export type TeamDepositResponseElementPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: TeamDepositResponseElement[];
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
