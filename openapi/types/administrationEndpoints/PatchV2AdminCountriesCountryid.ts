import type { CountryAdminDto } from "../CountryAdminDto";
import type { AdminUpdateOrCreateCountryRequest } from "../AdminUpdateOrCreateCountryRequest";

export type PatchV2AdminCountriesCountryidPathParams = {
    /**
     * @type integer, int64
     */
    countryId: number;
};
/**
 * @description OK
 */
export type PatchV2AdminCountriesCountryid200 = CountryAdminDto;
export type PatchV2AdminCountriesCountryidMutationRequest =
    AdminUpdateOrCreateCountryRequest;
/**
 * @description OK
 */
export type PatchV2AdminCountriesCountryidMutationResponse = CountryAdminDto;
export type PatchV2AdminCountriesCountryidMutation = {
    Response: PatchV2AdminCountriesCountryidMutationResponse;
    Request: PatchV2AdminCountriesCountryidMutationRequest;
    PathParams: PatchV2AdminCountriesCountryidPathParams;
};
