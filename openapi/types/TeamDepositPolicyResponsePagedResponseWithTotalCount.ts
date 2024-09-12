import type { TeamDepositPolicyResponse } from "./TeamDepositPolicyResponse";

export type TeamDepositPolicyResponsePagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: TeamDepositPolicyResponse[];
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
