import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamsQueryResponse,
    GetV2AdminTeamsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminTeams";

/**
 * @link /v2/admin/teams
 */
export async function getV2AdminTeams(
    params?: GetV2AdminTeamsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTeamsQueryResponse>["data"]> {
    const res = await client<GetV2AdminTeamsQueryResponse>({
        method: "get",
        url: `/v2/admin/teams`,
        params,
        ...options,
    });
    return res.data;
}
