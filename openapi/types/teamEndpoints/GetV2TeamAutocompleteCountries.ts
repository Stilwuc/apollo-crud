import type { CountryAutocompleteResponse } from "../CountryAutocompleteResponse";

export type GetV2TeamAutocompleteCountriesQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2TeamAutocompleteCountries200 = CountryAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2TeamAutocompleteCountriesQueryResponse =
    CountryAutocompleteResponse[];
export type GetV2TeamAutocompleteCountriesQuery = {
    Response: GetV2TeamAutocompleteCountriesQueryResponse;
    QueryParams: GetV2TeamAutocompleteCountriesQueryParams;
};
