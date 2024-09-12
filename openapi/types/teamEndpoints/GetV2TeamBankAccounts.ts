import type { BankAccountDtoPagedResponse } from "../BankAccountDtoPagedResponse";

export type GetV2TeamBankAccountsQueryParams = {
    /**
     * @type string | undefined
     */
    BankName?: string;
    /**
     * @type boolean | undefined
     */
    isDeleted?: boolean;
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type string | undefined
     */
    sortBy?: string;
};
/**
 * @description OK
 */
export type GetV2TeamBankAccounts200 = BankAccountDtoPagedResponse;
/**
 * @description OK
 */
export type GetV2TeamBankAccountsQueryResponse = BankAccountDtoPagedResponse;
export type GetV2TeamBankAccountsQuery = {
    Response: GetV2TeamBankAccountsQueryResponse;
    QueryParams: GetV2TeamBankAccountsQueryParams;
};
