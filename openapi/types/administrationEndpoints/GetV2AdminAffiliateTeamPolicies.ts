import type { AffiliateTeamPolicyResponseWithAffiliateElementPagedResponseWithTotalCount } from "../AffiliateTeamPolicyResponseWithAffiliateElementPagedResponseWithTotalCount";

export type GetV2AdminAffiliateTeamPoliciesQueryParams = {
    /**
     * @type integer | undefined, int64
     */
    affiliateId?: number;
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
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
export type GetV2AdminAffiliateTeamPolicies200 =
    AffiliateTeamPolicyResponseWithAffiliateElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminAffiliateTeamPoliciesQueryResponse =
    AffiliateTeamPolicyResponseWithAffiliateElementPagedResponseWithTotalCount;
export type GetV2AdminAffiliateTeamPoliciesQuery = {
    Response: GetV2AdminAffiliateTeamPoliciesQueryResponse;
    QueryParams: GetV2AdminAffiliateTeamPoliciesQueryParams;
};
