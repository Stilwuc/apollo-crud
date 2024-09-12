import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliateTeamReportQueryResponse,
    GetV2AdminAffiliateTeamReportQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliateTeamReport";

/**
 * @link /v2/admin/affiliate-team-report
 */
export async function getV2AdminAffiliateTeamReport(
    params?: GetV2AdminAffiliateTeamReportQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminAffiliateTeamReportQueryResponse>["data"]> {
    const res = await client<GetV2AdminAffiliateTeamReportQueryResponse>({
        method: "get",
        url: `/v2/admin/affiliate-team-report`,
        params,
        ...options,
    });
    return res.data;
}
