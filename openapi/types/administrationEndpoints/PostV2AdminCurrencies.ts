import type { CreateCurrencyResponse } from "../CreateCurrencyResponse";
import type { CreateCurrencyCommand } from "../CreateCurrencyCommand";

/**
 * @description OK
 */
export type PostV2AdminCurrencies200 = CreateCurrencyResponse;
export type PostV2AdminCurrenciesMutationRequest = CreateCurrencyCommand;
/**
 * @description OK
 */
export type PostV2AdminCurrenciesMutationResponse = CreateCurrencyResponse;
export type PostV2AdminCurrenciesMutation = {
    Response: PostV2AdminCurrenciesMutationResponse;
    Request: PostV2AdminCurrenciesMutationRequest;
};
