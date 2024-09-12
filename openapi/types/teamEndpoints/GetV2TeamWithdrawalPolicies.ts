import type { TeamWithdrawalPolicyResponsePagedResponseWithTotalCount } from "../TeamWithdrawalPolicyResponsePagedResponseWithTotalCount";

export type GetV2TeamWithdrawalPoliciesQueryParams = {
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
/**
 * @description OK
 */
export type GetV2TeamWithdrawalPolicies200 =
    TeamWithdrawalPolicyResponsePagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2TeamWithdrawalPoliciesQueryResponse =
    TeamWithdrawalPolicyResponsePagedResponseWithTotalCount;
export type GetV2TeamWithdrawalPoliciesQuery = {
    Response: GetV2TeamWithdrawalPoliciesQueryResponse;
    QueryParams: GetV2TeamWithdrawalPoliciesQueryParams;
};
