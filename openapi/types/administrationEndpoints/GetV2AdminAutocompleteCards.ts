import type { GetCardAutocompleteResponse } from "../GetCardAutocompleteResponse";

export type GetV2AdminAutocompleteCardsQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2AdminAutocompleteCards200 = GetCardAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2AdminAutocompleteCardsQueryResponse =
    GetCardAutocompleteResponse[];
export type GetV2AdminAutocompleteCardsQuery = {
    Response: GetV2AdminAutocompleteCardsQueryResponse;
    QueryParams: GetV2AdminAutocompleteCardsQueryParams;
};
