import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamWithdrawalsQueryResponse,
    GetV2AdminTeamWithdrawalsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamWithdrawals";

/**
 * @link /v2/admin/team-withdrawals
 */
export async function getV2AdminTeamWithdrawals(
    params?: GetV2AdminTeamWithdrawalsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTeamWithdrawalsQueryResponse>["data"]> {
    const res = await client<GetV2AdminTeamWithdrawalsQueryResponse>({
        method: "get",
        url: `/v2/admin/team-withdrawals`,
        params,
        ...options,
    });
    return res.data;
}
