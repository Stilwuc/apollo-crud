import type { GetTeamAutocompleteResponse } from "../GetTeamAutocompleteResponse";

export type GetV2AdminAutocompleteTeamsQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2AdminAutocompleteTeams200 = GetTeamAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2AdminAutocompleteTeamsQueryResponse =
    GetTeamAutocompleteResponse[];
export type GetV2AdminAutocompleteTeamsQuery = {
    Response: GetV2AdminAutocompleteTeamsQueryResponse;
    QueryParams: GetV2AdminAutocompleteTeamsQueryParams;
};
