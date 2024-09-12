import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2MerchantBalanceDepositsQueryResponse,
    GetV2MerchantBalanceDepositsQueryParams,
} from "../../types/merchantEndpoints/GetV2MerchantBalanceDeposits";

/**
 * @link /v2/merchant/balance-deposits
 */
export async function getV2MerchantBalanceDeposits(
    params?: GetV2MerchantBalanceDepositsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2MerchantBalanceDepositsQueryResponse>["data"]> {
    const res = await client<GetV2MerchantBalanceDepositsQueryResponse>({
        method: "get",
        url: `/v2/merchant/balance-deposits`,
        params,
        ...options,
    });
    return res.data;
}
