import type { CountryAdminDto } from "../CountryAdminDto";
import type { AdminUpdateOrCreateCountryRequest } from "../AdminUpdateOrCreateCountryRequest";

/**
 * @description OK
 */
export type PostV2AdminCountries200 = CountryAdminDto;
export type PostV2AdminCountriesMutationRequest =
    AdminUpdateOrCreateCountryRequest;
/**
 * @description OK
 */
export type PostV2AdminCountriesMutationResponse = CountryAdminDto;
export type PostV2AdminCountriesMutation = {
    Response: PostV2AdminCountriesMutationResponse;
    Request: PostV2AdminCountriesMutationRequest;
};
