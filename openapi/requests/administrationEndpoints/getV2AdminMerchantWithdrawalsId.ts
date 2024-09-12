import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminMerchantWithdrawalsIdQueryResponse,
    GetV2AdminMerchantWithdrawalsIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminMerchantWithdrawalsId";

/**
 * @link /v2/admin/merchant-withdrawals/:id
 */
export async function getV2AdminMerchantWithdrawalsId(
    id: GetV2AdminMerchantWithdrawalsIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminMerchantWithdrawalsIdQueryResponse>["data"]
> {
    const res = await client<GetV2AdminMerchantWithdrawalsIdQueryResponse>({
        method: "get",
        url: `/v2/admin/merchant-withdrawals/${id}`,
        ...options,
    });
    return res.data;
}
