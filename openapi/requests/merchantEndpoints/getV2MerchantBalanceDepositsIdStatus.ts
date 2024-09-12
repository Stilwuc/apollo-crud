import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2MerchantBalanceDepositsIdStatusQueryResponse,
    GetV2MerchantBalanceDepositsIdStatusPathParams,
} from "../../types/merchantEndpoints/GetV2MerchantBalanceDepositsIdStatus";

/**
 * @link /v2/merchant/balance-deposits/:id/status
 */
export async function getV2MerchantBalanceDepositsIdStatus(
    id: GetV2MerchantBalanceDepositsIdStatusPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2MerchantBalanceDepositsIdStatusQueryResponse>["data"]
> {
    const res = await client<GetV2MerchantBalanceDepositsIdStatusQueryResponse>(
        {
            method: "get",
            url: `/v2/merchant/balance-deposits/${id}/status`,
            ...options,
        }
    );
    return res.data;
}
