import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2AffiliateStatusQueryResponse } from "../../types/affiliateEndpoints/GetV2AffiliateStatus";

/**
 * @link /v2/affiliate/status
 */
export async function getV2AffiliateStatus(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AffiliateStatusQueryResponse>["data"]> {
    const res = await client<GetV2AffiliateStatusQueryResponse>({
        method: "get",
        url: `/v2/affiliate/status`,
        ...options,
    });
    return res.data;
}
