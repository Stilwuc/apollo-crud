import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2MerchantBalanceDepositsUnpaidQueryResponse } from "../../types/merchantEndpoints/GetV2MerchantBalanceDepositsUnpaid";

/**
 * @link /v2/merchant/balance-deposits/unpaid
 */
export async function getV2MerchantBalanceDepositsUnpaid(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2MerchantBalanceDepositsUnpaidQueryResponse>["data"]
> {
    const res = await client<GetV2MerchantBalanceDepositsUnpaidQueryResponse>({
        method: "get",
        url: `/v2/merchant/balance-deposits/unpaid`,
        ...options,
    });
    return res.data;
}
