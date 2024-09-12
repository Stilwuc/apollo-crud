import type { GetAffiliatesAutocompleteResponse } from "../GetAffiliatesAutocompleteResponse";

export type GetV2AdminAutocompleteAffiliatesQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2AdminAutocompleteAffiliates200 =
    GetAffiliatesAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2AdminAutocompleteAffiliatesQueryResponse =
    GetAffiliatesAutocompleteResponse[];
export type GetV2AdminAutocompleteAffiliatesQuery = {
    Response: GetV2AdminAutocompleteAffiliatesQueryResponse;
    QueryParams: GetV2AdminAutocompleteAffiliatesQueryParams;
};
