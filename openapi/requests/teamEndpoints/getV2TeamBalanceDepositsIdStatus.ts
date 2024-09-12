import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamBalanceDepositsIdStatusQueryResponse,
    GetV2TeamBalanceDepositsIdStatusPathParams,
} from "../../types/teamEndpoints/GetV2TeamBalanceDepositsIdStatus";

/**
 * @link /v2/team/balance-deposits/:id/status
 */
export async function getV2TeamBalanceDepositsIdStatus(
    id: GetV2TeamBalanceDepositsIdStatusPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2TeamBalanceDepositsIdStatusQueryResponse>["data"]
> {
    const res = await client<GetV2TeamBalanceDepositsIdStatusQueryResponse>({
        method: "get",
        url: `/v2/team/balance-deposits/${id}/status`,
        ...options,
    });
    return res.data;
}
