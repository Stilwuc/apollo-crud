import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AffiliateWithdrawalRequestsQueryResponse,
    GetV2AffiliateWithdrawalRequestsQueryParams,
} from "../../types/affiliateEndpoints/GetV2AffiliateWithdrawalRequests";

/**
 * @link /v2/affiliate/withdrawal-requests
 */
export async function getV2AffiliateWithdrawalRequests(
    params?: GetV2AffiliateWithdrawalRequestsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AffiliateWithdrawalRequestsQueryResponse>["data"]
> {
    const res = await client<GetV2AffiliateWithdrawalRequestsQueryResponse>({
        method: "get",
        url: `/v2/affiliate/withdrawal-requests`,
        params,
        ...options,
    });
    return res.data;
}
