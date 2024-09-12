import type { AffiliateTeamPolicyResponseElement } from "./AffiliateTeamPolicyResponseElement";

export type AffiliateTeamPolicyResponseElementPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: AffiliateTeamPolicyResponseElement[];
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
