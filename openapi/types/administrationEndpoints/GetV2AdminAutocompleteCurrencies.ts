import type { GetCurrencyAutoCompleteResponse } from "../GetCurrencyAutoCompleteResponse";

export type GetV2AdminAutocompleteCurrenciesQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2AdminAutocompleteCurrencies200 =
    GetCurrencyAutoCompleteResponse[];
/**
 * @description OK
 */
export type GetV2AdminAutocompleteCurrenciesQueryResponse =
    GetCurrencyAutoCompleteResponse[];
export type GetV2AdminAutocompleteCurrenciesQuery = {
    Response: GetV2AdminAutocompleteCurrenciesQueryResponse;
    QueryParams: GetV2AdminAutocompleteCurrenciesQueryParams;
};
