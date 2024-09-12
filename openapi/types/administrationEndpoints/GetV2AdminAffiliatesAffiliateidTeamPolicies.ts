import type { AffiliateTeamPolicyResponseWithAffiliateElementPagedResponseWithTotalCount } from "../AffiliateTeamPolicyResponseWithAffiliateElementPagedResponseWithTotalCount";

export type GetV2AdminAffiliatesAffiliateidTeamPoliciesPathParams = {
    /**
     * @type integer, int64
     */
    affiliateId: number;
};
export type GetV2AdminAffiliatesAffiliateidTeamPoliciesQueryParams = {
    /**
     * @type string | undefined
     */
    sortBy?: string;
    /**
     * @type string | undefined
     */
    teamName?: string;
    /**
     * @type string | undefined
     */
    currencyName?: string;
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
export type GetV2AdminAffiliatesAffiliateidTeamPolicies200 =
    AffiliateTeamPolicyResponseWithAffiliateElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminAffiliatesAffiliateidTeamPoliciesQueryResponse =
    AffiliateTeamPolicyResponseWithAffiliateElementPagedResponseWithTotalCount;
export type GetV2AdminAffiliatesAffiliateidTeamPoliciesQuery = {
    Response: GetV2AdminAffiliatesAffiliateidTeamPoliciesQueryResponse;
    PathParams: GetV2AdminAffiliatesAffiliateidTeamPoliciesPathParams;
    QueryParams: GetV2AdminAffiliatesAffiliateidTeamPoliciesQueryParams;
};
