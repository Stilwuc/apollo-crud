import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAutocompleteCurrencyRateProvidersQueryResponse,
    GetV2AdminAutocompleteCurrencyRateProvidersQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAutocompleteCurrencyRateProviders";

/**
 * @link /v2/admin/autocomplete/currency-rate-providers
 */
export async function getV2AdminAutocompleteCurrencyRateProviders(
    params: GetV2AdminAutocompleteCurrencyRateProvidersQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAutocompleteCurrencyRateProvidersQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminAutocompleteCurrencyRateProvidersQueryResponse>({
            method: "get",
            url: `/v2/admin/autocomplete/currency-rate-providers`,
            params,
            ...options,
        });
    return res.data;
}
