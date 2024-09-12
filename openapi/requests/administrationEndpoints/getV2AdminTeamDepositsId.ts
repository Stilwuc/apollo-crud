import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamDepositsIdQueryResponse,
    GetV2AdminTeamDepositsIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamDepositsId";

/**
 * @link /v2/admin/team-deposits/:id
 */
export async function getV2AdminTeamDepositsId(
    id: GetV2AdminTeamDepositsIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTeamDepositsIdQueryResponse>["data"]> {
    const res = await client<GetV2AdminTeamDepositsIdQueryResponse>({
        method: "get",
        url: `/v2/admin/team-deposits/${id}`,
        ...options,
    });
    return res.data;
}
