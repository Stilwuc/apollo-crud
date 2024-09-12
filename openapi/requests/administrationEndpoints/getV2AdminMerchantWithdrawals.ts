import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantWithdrawalsQueryResponse,
    GetV2AdminMerchantWithdrawalsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchantWithdrawals";

/**
 * @link /v2/admin/merchant-withdrawals
 */
export async function getV2AdminMerchantWithdrawals(
    params?: GetV2AdminMerchantWithdrawalsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminMerchantWithdrawalsQueryResponse>["data"]> {
    const res = await client<GetV2AdminMerchantWithdrawalsQueryResponse>({
        method: "get",
        url: `/v2/admin/merchant-withdrawals`,
        params,
        ...options,
    });
    return res.data;
}
