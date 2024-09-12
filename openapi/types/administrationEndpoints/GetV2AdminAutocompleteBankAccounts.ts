import type { GetBankAccountAutocompleteResponse } from "../GetBankAccountAutocompleteResponse";

export type GetV2AdminAutocompleteBankAccountsQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2AdminAutocompleteBankAccounts200 =
    GetBankAccountAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2AdminAutocompleteBankAccountsQueryResponse =
    GetBankAccountAutocompleteResponse[];
export type GetV2AdminAutocompleteBankAccountsQuery = {
    Response: GetV2AdminAutocompleteBankAccountsQueryResponse;
    QueryParams: GetV2AdminAutocompleteBankAccountsQueryParams;
};
