import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AffiliateTeamReportQueryResponse,
    GetV2AffiliateTeamReportQueryParams,
} from "../../types/affiliateEndpoints/GetV2AffiliateTeamReport";

/**
 * @link /v2/affiliate/team-report
 */
export async function getV2AffiliateTeamReport(
    params?: GetV2AffiliateTeamReportQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AffiliateTeamReportQueryResponse>["data"]> {
    const res = await client<GetV2AffiliateTeamReportQueryResponse>({
        method: "get",
        url: `/v2/affiliate/team-report`,
        params,
        ...options,
    });
    return res.data;
}
