import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliateMerchantReportMerchantreportidQueryResponse,
    GetV2AdminAffiliateMerchantReportMerchantreportidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliateMerchantReportMerchantreportid";

/**
 * @link /v2/admin/affiliate-merchant-report/:merchantReportId
 */
export async function getV2AdminAffiliateMerchantReportMerchantreportid(
    merchantReportId: GetV2AdminAffiliateMerchantReportMerchantreportidPathParams["merchantReportId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAffiliateMerchantReportMerchantreportidQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminAffiliateMerchantReportMerchantreportidQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/affiliate-merchant-report/${merchantReportId}`,
                ...options,
            }
        );
    return res.data;
}
