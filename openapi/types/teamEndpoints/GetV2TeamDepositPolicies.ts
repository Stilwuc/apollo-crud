import type { TeamDepositPolicyResponsePagedResponseWithTotalCount } from "../TeamDepositPolicyResponsePagedResponseWithTotalCount";

export type GetV2TeamDepositPoliciesQueryParams = {
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
export type GetV2TeamDepositPolicies200 =
    TeamDepositPolicyResponsePagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2TeamDepositPoliciesQueryResponse =
    TeamDepositPolicyResponsePagedResponseWithTotalCount;
export type GetV2TeamDepositPoliciesQuery = {
    Response: GetV2TeamDepositPoliciesQueryResponse;
    QueryParams: GetV2TeamDepositPoliciesQueryParams;
};
