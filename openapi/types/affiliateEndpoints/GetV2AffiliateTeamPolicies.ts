import type { AffiliateTeamPolicyResponseElementPagedResponseWithTotalCount } from "../AffiliateTeamPolicyResponseElementPagedResponseWithTotalCount";

export type GetV2AffiliateTeamPoliciesQueryParams = {
    /**
     * @type string | undefined
     */
    teamName?: string;
    /**
     * @type string | undefined
     */
    currencyName?: string;
    /**
     * @type string | undefined
     */
    sortBy?: string;
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
export type GetV2AffiliateTeamPolicies200 =
    AffiliateTeamPolicyResponseElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AffiliateTeamPoliciesQueryResponse =
    AffiliateTeamPolicyResponseElementPagedResponseWithTotalCount;
export type GetV2AffiliateTeamPoliciesQuery = {
    Response: GetV2AffiliateTeamPoliciesQueryResponse;
    QueryParams: GetV2AffiliateTeamPoliciesQueryParams;
};
