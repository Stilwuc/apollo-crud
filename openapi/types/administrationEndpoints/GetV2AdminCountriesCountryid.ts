import type { CountryAdminDto } from "../CountryAdminDto";

export type GetV2AdminCountriesCountryidPathParams = {
    /**
     * @type integer, int64
     */
    countryId: number;
};
/**
 * @description OK
 */
export type GetV2AdminCountriesCountryid200 = CountryAdminDto;
/**
 * @description Created
 */
export type GetV2AdminCountriesCountryid201 = unknown;
/**
 * @description OK
 */
export type GetV2AdminCountriesCountryidQueryResponse = CountryAdminDto;
export type GetV2AdminCountriesCountryidQuery = {
    Response: GetV2AdminCountriesCountryidQueryResponse;
    PathParams: GetV2AdminCountriesCountryidPathParams;
};
