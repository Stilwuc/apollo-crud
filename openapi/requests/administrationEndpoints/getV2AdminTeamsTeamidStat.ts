import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamsTeamidStatQueryResponse,
    GetV2AdminTeamsTeamidStatPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamsTeamidStat";

/**
 * @link /v2/admin/teams/:teamId/stat
 */
export async function getV2AdminTeamsTeamidStat(
    teamId: GetV2AdminTeamsTeamidStatPathParams["teamId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTeamsTeamidStatQueryResponse>["data"]> {
    const res = await client<GetV2AdminTeamsTeamidStatQueryResponse>({
        method: "get",
        url: `/v2/admin/teams/${teamId}/stat`,
        ...options,
    });
    return res.data;
}
