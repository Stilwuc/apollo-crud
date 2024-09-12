import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2AdminTeamStatQueryResponse } from "../../types/administrationEndpoints/GetV2AdminTeamStat";

/**
 * @link /v2/admin/team-stat
 */
export async function getV2AdminTeamStat(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTeamStatQueryResponse>["data"]> {
    const res = await client<GetV2AdminTeamStatQueryResponse>({
        method: "get",
        url: `/v2/admin/team-stat`,
        ...options,
    });
    return res.data;
}
