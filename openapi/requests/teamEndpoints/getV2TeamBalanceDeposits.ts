import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamBalanceDepositsQueryResponse,
    GetV2TeamBalanceDepositsQueryParams,
} from "../../types/teamEndpoints/GetV2TeamBalanceDeposits";

/**
 * @link /v2/team/balance-deposits
 */
export async function getV2TeamBalanceDeposits(
    params?: GetV2TeamBalanceDepositsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamBalanceDepositsQueryResponse>["data"]> {
    const res = await client<GetV2TeamBalanceDepositsQueryResponse>({
        method: "get",
        url: `/v2/team/balance-deposits`,
        params,
        ...options,
    });
    return res.data;
}
