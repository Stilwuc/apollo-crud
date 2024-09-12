import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2TeamBalanceDepositsUnpaidQueryResponse } from "../../types/teamEndpoints/GetV2TeamBalanceDepositsUnpaid";

/**
 * @link /v2/team/balance-deposits/unpaid
 */
export async function getV2TeamBalanceDepositsUnpaid(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2TeamBalanceDepositsUnpaidQueryResponse>["data"]
> {
    const res = await client<GetV2TeamBalanceDepositsUnpaidQueryResponse>({
        method: "get",
        url: `/v2/team/balance-deposits/unpaid`,
        ...options,
    });
    return res.data;
}
