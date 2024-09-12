import type { GetBankAccountAutocompleteResponse } from "../GetBankAccountAutocompleteResponse";

export type GetV2TeamAutocompleteBankAccountsQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2TeamAutocompleteBankAccounts200 =
    GetBankAccountAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2TeamAutocompleteBankAccountsQueryResponse =
    GetBankAccountAutocompleteResponse[];
export type GetV2TeamAutocompleteBankAccountsQuery = {
    Response: GetV2TeamAutocompleteBankAccountsQueryResponse;
    QueryParams: GetV2TeamAutocompleteBankAccountsQueryParams;
};
