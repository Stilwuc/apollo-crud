import type { GetAffiliatesAutocompleteResponse } from "../GetAffiliatesAutocompleteResponse";

export type GetV2AdminAutocompleteTrafficThreadsQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2AdminAutocompleteTrafficThreads200 =
    GetAffiliatesAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2AdminAutocompleteTrafficThreadsQueryResponse =
    GetAffiliatesAutocompleteResponse[];
export type GetV2AdminAutocompleteTrafficThreadsQuery = {
    Response: GetV2AdminAutocompleteTrafficThreadsQueryResponse;
    QueryParams: GetV2AdminAutocompleteTrafficThreadsQueryParams;
};
