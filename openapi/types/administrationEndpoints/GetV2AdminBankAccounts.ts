import type { BankAccountAdminDtoPagedResponseWithTotalCount } from "../BankAccountAdminDtoPagedResponseWithTotalCount";

export type GetV2AdminBankAccountsQueryParams = {
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
    /**
     * @type string | undefined
     */
    phoneNumber?: string;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
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
};
/**
 * @description OK
 */
export type GetV2AdminBankAccounts200 =
    BankAccountAdminDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminBankAccountsQueryResponse =
    BankAccountAdminDtoPagedResponseWithTotalCount;
export type GetV2AdminBankAccountsQuery = {
    Response: GetV2AdminBankAccountsQueryResponse;
    QueryParams: GetV2AdminBankAccountsQueryParams;
};
