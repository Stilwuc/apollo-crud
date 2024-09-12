import type { AffiliateTeamPolicyResponseWithAffiliateElement } from "./AffiliateTeamPolicyResponseWithAffiliateElement";

export type AffiliateTeamPolicyResponseWithAffiliateElementPagedResponseWithTotalCount =
    {
        /**
         * @type array | undefined
         */
        items?: AffiliateTeamPolicyResponseWithAffiliateElement[];
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
