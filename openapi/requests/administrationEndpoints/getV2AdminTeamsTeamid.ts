import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamsTeamidQueryResponse,
    GetV2AdminTeamsTeamidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamsTeamid";

/**
 * @link /v2/admin/teams/:teamId
 */
export async function getV2AdminTeamsTeamid(
    teamId: GetV2AdminTeamsTeamidPathParams["teamId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTeamsTeamidQueryResponse>["data"]> {
    const res = await client<GetV2AdminTeamsTeamidQueryResponse>({
        method: "get",
        url: `/v2/admin/teams/${teamId}`,
        ...options,
    });
    return res.data;
}
