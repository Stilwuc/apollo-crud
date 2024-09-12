import type { GetAffiliatesAutocompleteResponse } from "../GetAffiliatesAutocompleteResponse";

export type GetV2AdminAutocompleteTrafficCascadesQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2AdminAutocompleteTrafficCascades200 =
    GetAffiliatesAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2AdminAutocompleteTrafficCascadesQueryResponse =
    GetAffiliatesAutocompleteResponse[];
export type GetV2AdminAutocompleteTrafficCascadesQuery = {
    Response: GetV2AdminAutocompleteTrafficCascadesQueryResponse;
    QueryParams: GetV2AdminAutocompleteTrafficCascadesQueryParams;
};
