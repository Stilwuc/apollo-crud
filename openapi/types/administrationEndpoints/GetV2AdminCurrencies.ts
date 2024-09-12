import type { CurrencyDto } from "../CurrencyDto";

/**
 * @description OK
 */
export type GetV2AdminCurrencies200 = CurrencyDto[];
/**
 * @description OK
 */
export type GetV2AdminCurrenciesQueryResponse = CurrencyDto[];
export type GetV2AdminCurrenciesQuery = {
    Response: GetV2AdminCurrenciesQueryResponse;
};
