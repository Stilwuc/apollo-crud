import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantDepositsQueryResponse,
    GetV2AdminMerchantDepositsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchantDeposits";

/**
 * @link /v2/admin/merchant-deposits
 */
export async function getV2AdminMerchantDeposits(
    params?: GetV2AdminMerchantDepositsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminMerchantDepositsQueryResponse>["data"]> {
    const res = await client<GetV2AdminMerchantDepositsQueryResponse>({
        method: "get",
        url: `/v2/admin/merchant-deposits`,
        params,
        ...options,
    });
    return res.data;
}
