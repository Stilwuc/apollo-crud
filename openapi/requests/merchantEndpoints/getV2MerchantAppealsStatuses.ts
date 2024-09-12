import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2MerchantAppealsStatusesQueryResponse,
    GetV2MerchantAppealsStatusesQueryParams,
} from "../../types/merchantEndpoints/GetV2MerchantAppealsStatuses";

/**
 * @link /v2/merchant/appeals/statuses
 */
export async function getV2MerchantAppealsStatuses(
    params?: GetV2MerchantAppealsStatusesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2MerchantAppealsStatusesQueryResponse>["data"]> {
    const res = await client<GetV2MerchantAppealsStatusesQueryResponse>({
        method: "get",
        url: `/v2/merchant/appeals/statuses`,
        params,
        ...options,
    });
    return res.data;
}
