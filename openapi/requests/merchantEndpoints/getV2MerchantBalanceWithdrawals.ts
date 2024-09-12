import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2MerchantBalanceWithdrawalsQueryResponse,
    GetV2MerchantBalanceWithdrawalsQueryParams,
} from "../../types/merchantEndpoints/GetV2MerchantBalanceWithdrawals";

/**
 * @link /v2/merchant/balance-withdrawals
 */
export async function getV2MerchantBalanceWithdrawals(
    params?: GetV2MerchantBalanceWithdrawalsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2MerchantBalanceWithdrawalsQueryResponse>["data"]
> {
    const res = await client<GetV2MerchantBalanceWithdrawalsQueryResponse>({
        method: "get",
        url: `/v2/merchant/balance-withdrawals`,
        params,
        ...options,
    });
    return res.data;
}
