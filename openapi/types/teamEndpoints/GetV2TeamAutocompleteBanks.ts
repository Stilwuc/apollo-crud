import type { BankAutocompleteResponse } from "../BankAutocompleteResponse";

export type GetV2TeamAutocompleteBanksQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2TeamAutocompleteBanks200 = BankAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2TeamAutocompleteBanksQueryResponse =
    BankAutocompleteResponse[];
export type GetV2TeamAutocompleteBanksQuery = {
    Response: GetV2TeamAutocompleteBanksQueryResponse;
    QueryParams: GetV2TeamAutocompleteBanksQueryParams;
};
