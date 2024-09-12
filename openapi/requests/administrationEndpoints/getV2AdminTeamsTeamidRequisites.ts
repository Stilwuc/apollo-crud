import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamsTeamidRequisitesQueryResponse,
    GetV2AdminTeamsTeamidRequisitesPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamsTeamidRequisites";

/**
 * @link /v2/admin/teams/:teamId/requisites
 */
export async function getV2AdminTeamsTeamidRequisites(
    teamId: GetV2AdminTeamsTeamidRequisitesPathParams["teamId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTeamsTeamidRequisitesQueryResponse>["data"]
> {
    const res = await client<GetV2AdminTeamsTeamidRequisitesQueryResponse>({
        method: "get",
        url: `/v2/admin/teams/${teamId}/requisites`,
        ...options,
    });
    return res.data;
}
