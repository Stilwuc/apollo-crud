import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamBalanceWithdrawalsQueryResponse,
    GetV2TeamBalanceWithdrawalsQueryParams,
} from "../../types/teamEndpoints/GetV2TeamBalanceWithdrawals";

/**
 * @link /v2/team/balance-withdrawals
 */
export async function getV2TeamBalanceWithdrawals(
    params?: GetV2TeamBalanceWithdrawalsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamBalanceWithdrawalsQueryResponse>["data"]> {
    const res = await client<GetV2TeamBalanceWithdrawalsQueryResponse>({
        method: "get",
        url: `/v2/team/balance-withdrawals`,
        params,
        ...options,
    });
    return res.data;
}
