import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2AdminWithdrawalTeamStatQueryResponse } from "../../types/administrationEndpoints/GetV2AdminWithdrawalTeamStat";

/**
 * @link /v2/admin/withdrawal-team-stat
 */
export async function getV2AdminWithdrawalTeamStat(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminWithdrawalTeamStatQueryResponse>["data"]> {
    const res = await client<GetV2AdminWithdrawalTeamStatQueryResponse>({
        method: "get",
        url: `/v2/admin/withdrawal-team-stat`,
        ...options,
    });
    return res.data;
}
