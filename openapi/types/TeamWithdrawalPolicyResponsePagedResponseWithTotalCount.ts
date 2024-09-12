import type { TeamWithdrawalPolicyResponse } from "./TeamWithdrawalPolicyResponse";

export type TeamWithdrawalPolicyResponsePagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: TeamWithdrawalPolicyResponse[];
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
