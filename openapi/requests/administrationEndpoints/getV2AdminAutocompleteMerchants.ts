import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAutocompleteMerchantsQueryResponse,
    GetV2AdminAutocompleteMerchantsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAutocompleteMerchants";

/**
 * @link /v2/admin/autocomplete/merchants
 */
export async function getV2AdminAutocompleteMerchants(
    params: GetV2AdminAutocompleteMerchantsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAutocompleteMerchantsQueryResponse>["data"]
> {
    const res = await client<GetV2AdminAutocompleteMerchantsQueryResponse>({
        method: "get",
        url: `/v2/admin/autocomplete/merchants`,
        params,
        ...options,
    });
    return res.data;
}
