import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAutocompleteCurrenciesQueryResponse,
    GetV2AdminAutocompleteCurrenciesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAutocompleteCurrencies";

/**
 * @link /v2/admin/autocomplete/currencies
 */
export async function getV2AdminAutocompleteCurrencies(
    params: GetV2AdminAutocompleteCurrenciesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAutocompleteCurrenciesQueryResponse>["data"]
> {
    const res = await client<GetV2AdminAutocompleteCurrenciesQueryResponse>({
        method: "get",
        url: `/v2/admin/autocomplete/currencies`,
        params,
        ...options,
    });
    return res.data;
}
