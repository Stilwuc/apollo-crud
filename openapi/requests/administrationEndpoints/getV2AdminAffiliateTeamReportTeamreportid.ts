import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliateTeamReportTeamreportidQueryResponse,
    GetV2AdminAffiliateTeamReportTeamreportidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliateTeamReportTeamreportid";

/**
 * @link /v2/admin/affiliate-team-report/:teamReportId
 */
export async function getV2AdminAffiliateTeamReportTeamreportid(
    teamReportId: GetV2AdminAffiliateTeamReportTeamreportidPathParams["teamReportId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAffiliateTeamReportTeamreportidQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminAffiliateTeamReportTeamreportidQueryResponse>({
            method: "get",
            url: `/v2/admin/affiliate-team-report/${teamReportId}`,
            ...options,
        });
    return res.data;
}
