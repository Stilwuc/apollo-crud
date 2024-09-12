import type { TeamDepositPolicyResult } from "./TeamDepositPolicyResult";

export type TeamDepositPolicyResultPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: TeamDepositPolicyResult[];
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
