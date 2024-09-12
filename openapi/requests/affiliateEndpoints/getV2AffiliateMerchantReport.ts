import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AffiliateMerchantReportQueryResponse,
    GetV2AffiliateMerchantReportQueryParams,
} from "../../types/affiliateEndpoints/GetV2AffiliateMerchantReport";

/**
 * @link /v2/affiliate/merchant-report
 */
export async function getV2AffiliateMerchantReport(
    params?: GetV2AffiliateMerchantReportQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AffiliateMerchantReportQueryResponse>["data"]> {
    const res = await client<GetV2AffiliateMerchantReportQueryResponse>({
        method: "get",
        url: `/v2/affiliate/merchant-report`,
        params,
        ...options,
    });
    return res.data;
}
