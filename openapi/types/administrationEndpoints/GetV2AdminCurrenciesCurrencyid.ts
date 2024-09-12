import type { GetCurrencyResponse } from "../GetCurrencyResponse";

export type GetV2AdminCurrenciesCurrencyidPathParams = {
    /**
     * @type string, uuid
     */
    currencyId: string;
};
/**
 * @description OK
 */
export type GetV2AdminCurrenciesCurrencyid200 = GetCurrencyResponse;
/**
 * @description OK
 */
export type GetV2AdminCurrenciesCurrencyidQueryResponse = GetCurrencyResponse;
export type GetV2AdminCurrenciesCurrencyidQuery = {
    Response: GetV2AdminCurrenciesCurrencyidQueryResponse;
    PathParams: GetV2AdminCurrenciesCurrencyidPathParams;
};
