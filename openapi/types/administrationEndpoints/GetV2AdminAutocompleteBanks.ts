import type { BankAutocompleteResponse } from "../BankAutocompleteResponse";

export type GetV2AdminAutocompleteBanksQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2AdminAutocompleteBanks200 = BankAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2AdminAutocompleteBanksQueryResponse =
    BankAutocompleteResponse[];
export type GetV2AdminAutocompleteBanksQuery = {
    Response: GetV2AdminAutocompleteBanksQueryResponse;
    QueryParams: GetV2AdminAutocompleteBanksQueryParams;
};
