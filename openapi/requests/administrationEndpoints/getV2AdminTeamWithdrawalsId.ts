import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamWithdrawalsIdQueryResponse,
    GetV2AdminTeamWithdrawalsIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamWithdrawalsId";

/**
 * @link /v2/admin/team-withdrawals/:id
 */
export async function getV2AdminTeamWithdrawalsId(
    id: GetV2AdminTeamWithdrawalsIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTeamWithdrawalsIdQueryResponse>["data"]> {
    const res = await client<GetV2AdminTeamWithdrawalsIdQueryResponse>({
        method: "get",
        url: `/v2/admin/team-withdrawals/${id}`,
        ...options,
    });
    return res.data;
}
