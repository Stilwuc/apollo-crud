import type { TeamDepositPolicyResultPagedResponseWithTotalCount } from "../TeamDepositPolicyResultPagedResponseWithTotalCount";

export type GetV2AdminTeamsIdDepositPoliciesPathParams = {
    /**
     * @type string, uuid
     */
    id: string;
};
export type GetV2AdminTeamsIdDepositPoliciesQueryParams = {
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
export type GetV2AdminTeamsIdDepositPolicies200 =
    TeamDepositPolicyResultPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminTeamsIdDepositPoliciesQueryResponse =
    TeamDepositPolicyResultPagedResponseWithTotalCount;
export type GetV2AdminTeamsIdDepositPoliciesQuery = {
    Response: GetV2AdminTeamsIdDepositPoliciesQueryResponse;
    PathParams: GetV2AdminTeamsIdDepositPoliciesPathParams;
    QueryParams: GetV2AdminTeamsIdDepositPoliciesQueryParams;
};
