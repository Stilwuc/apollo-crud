import type { TeamWithdrawalPolicyResultPagedResponseWithTotalCount } from "../TeamWithdrawalPolicyResultPagedResponseWithTotalCount";

export type GetV2AdminTeamsTeamidWithdrawalPoliciesPathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
};
export type GetV2AdminTeamsTeamidWithdrawalPoliciesQueryParams = {
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
export type GetV2AdminTeamsTeamidWithdrawalPolicies200 =
    TeamWithdrawalPolicyResultPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminTeamsTeamidWithdrawalPoliciesQueryResponse =
    TeamWithdrawalPolicyResultPagedResponseWithTotalCount;
export type GetV2AdminTeamsTeamidWithdrawalPoliciesQuery = {
    Response: GetV2AdminTeamsTeamidWithdrawalPoliciesQueryResponse;
    PathParams: GetV2AdminTeamsTeamidWithdrawalPoliciesPathParams;
    QueryParams: GetV2AdminTeamsTeamidWithdrawalPoliciesQueryParams;
};
