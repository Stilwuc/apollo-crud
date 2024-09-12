import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliateWithdrawalsIdQueryResponse,
    GetV2AdminAffiliateWithdrawalsIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliateWithdrawalsId";

/**
 * @link /v2/admin/affiliate-withdrawals/:id
 */
export async function getV2AdminAffiliateWithdrawalsId(
    id: GetV2AdminAffiliateWithdrawalsIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAffiliateWithdrawalsIdQueryResponse>["data"]
> {
    const res = await client<GetV2AdminAffiliateWithdrawalsIdQueryResponse>({
        method: "get",
        url: `/v2/admin/affiliate-withdrawals/${id}`,
        ...options,
    });
    return res.data;
}
