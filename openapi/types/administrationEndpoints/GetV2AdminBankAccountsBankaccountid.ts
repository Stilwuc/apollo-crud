import type { BankAccountAdminDto } from "../BankAccountAdminDto";

export type GetV2AdminBankAccountsBankaccountidPathParams = {
    /**
     * @type string, uuid
     */
    bankAccountId: string;
};
/**
 * @description OK
 */
export type GetV2AdminBankAccountsBankaccountid200 = BankAccountAdminDto;
/**
 * @description OK
 */
export type GetV2AdminBankAccountsBankaccountidQueryResponse =
    BankAccountAdminDto;
export type GetV2AdminBankAccountsBankaccountidQuery = {
    Response: GetV2AdminBankAccountsBankaccountidQueryResponse;
    PathParams: GetV2AdminBankAccountsBankaccountidPathParams;
};
