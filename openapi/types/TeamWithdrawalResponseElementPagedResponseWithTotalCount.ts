import type { TeamWithdrawalResponseElement } from "./TeamWithdrawalResponseElement";

export type TeamWithdrawalResponseElementPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: TeamWithdrawalResponseElement[];
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
