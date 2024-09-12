import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantDepositsIdQueryResponse,
    GetV2AdminMerchantDepositsIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchantDepositsId";

/**
 * @link /v2/admin/merchant-deposits/:id
 */
export async function getV2AdminMerchantDepositsId(
    id: GetV2AdminMerchantDepositsIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminMerchantDepositsIdQueryResponse>["data"]> {
    const res = await client<GetV2AdminMerchantDepositsIdQueryResponse>({
        method: "get",
        url: `/v2/admin/merchant-deposits/${id}`,
        ...options,
    });
    return res.data;
}
