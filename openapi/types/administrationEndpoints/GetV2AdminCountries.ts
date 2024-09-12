import type { CountryAdminDto } from "../CountryAdminDto";

/**
 * @description OK
 */
export type GetV2AdminCountries200 = CountryAdminDto[];
/**
 * @description OK
 */
export type GetV2AdminCountriesQueryResponse = CountryAdminDto[];
export type GetV2AdminCountriesQuery = {
    Response: GetV2AdminCountriesQueryResponse;
};
