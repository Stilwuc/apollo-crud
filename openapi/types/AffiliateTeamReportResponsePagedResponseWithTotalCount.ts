import type { AffiliateTeamReportResponse } from "./AffiliateTeamReportResponse";

export type AffiliateTeamReportResponsePagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: AffiliateTeamReportResponse[];
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
