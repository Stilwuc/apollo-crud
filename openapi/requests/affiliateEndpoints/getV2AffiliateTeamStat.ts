import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AffiliateTeamStatQueryResponse,
    GetV2AffiliateTeamStatQueryParams,
} from "../../types/affiliateEndpoints/GetV2AffiliateTeamStat";

/**
 * @link /v2/affiliate/team-stat
 */
export async function getV2AffiliateTeamStat(
    params?: GetV2AffiliateTeamStatQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AffiliateTeamStatQueryResponse>["data"]> {
    const res = await client<GetV2AffiliateTeamStatQueryResponse>({
        method: "get",
        url: `/v2/affiliate/team-stat`,
        params,
        ...options,
    });
    return res.data;
}
