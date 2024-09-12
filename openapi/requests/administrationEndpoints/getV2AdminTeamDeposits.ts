import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamDepositsQueryResponse,
    GetV2AdminTeamDepositsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamDeposits";

/**
 * @link /v2/admin/team-deposits
 */
export async function getV2AdminTeamDeposits(
    params?: GetV2AdminTeamDepositsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTeamDepositsQueryResponse>["data"]> {
    const res = await client<GetV2AdminTeamDepositsQueryResponse>({
        method: "get",
        url: `/v2/admin/team-deposits`,
        params,
        ...options,
    });
    return res.data;
}
