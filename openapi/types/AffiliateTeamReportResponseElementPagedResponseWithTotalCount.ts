import type { AffiliateTeamReportResponseElement } from "./AffiliateTeamReportResponseElement";

export type AffiliateTeamReportResponseElementPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: AffiliateTeamReportResponseElement[];
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
