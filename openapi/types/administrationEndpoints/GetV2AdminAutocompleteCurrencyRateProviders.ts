import type { GetCurrencyRateProviderAutocompleteResponse } from "../GetCurrencyRateProviderAutocompleteResponse";

export type GetV2AdminAutocompleteCurrencyRateProvidersQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2AdminAutocompleteCurrencyRateProviders200 =
    GetCurrencyRateProviderAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2AdminAutocompleteCurrencyRateProvidersQueryResponse =
    GetCurrencyRateProviderAutocompleteResponse[];
export type GetV2AdminAutocompleteCurrencyRateProvidersQuery = {
    Response: GetV2AdminAutocompleteCurrencyRateProvidersQueryResponse;
    QueryParams: GetV2AdminAutocompleteCurrencyRateProvidersQueryParams;
};
