import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliateMerchantReportQueryResponse,
    GetV2AdminAffiliateMerchantReportQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliateMerchantReport";

/**
 * @link /v2/admin/affiliate-merchant-report
 */
export async function getV2AdminAffiliateMerchantReport(
    params?: GetV2AdminAffiliateMerchantReportQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAffiliateMerchantReportQueryResponse>["data"]
> {
    const res = await client<GetV2AdminAffiliateMerchantReportQueryResponse>({
        method: "get",
        url: `/v2/admin/affiliate-merchant-report`,
        params,
        ...options,
    });
    return res.data;
}
