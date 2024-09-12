import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliateWithdrawalsQueryResponse,
    GetV2AdminAffiliateWithdrawalsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliateWithdrawals";

/**
 * @link /v2/admin/affiliate-withdrawals
 */
export async function getV2AdminAffiliateWithdrawals(
    params?: GetV2AdminAffiliateWithdrawalsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAffiliateWithdrawalsQueryResponse>["data"]
> {
    const res = await client<GetV2AdminAffiliateWithdrawalsQueryResponse>({
        method: "get",
        url: `/v2/admin/affiliate-withdrawals`,
        params,
        ...options,
    });
    return res.data;
}
