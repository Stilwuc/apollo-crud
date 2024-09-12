import type { BankAccountDtoPagedResponse } from "../BankAccountDtoPagedResponse";

export type GetV2TeamBankAccountsBankaccountidPathParams = {
    /**
     * @type string, uuid
     */
    bankAccountId: string;
};
/**
 * @description OK
 */
export type GetV2TeamBankAccountsBankaccountid200 = BankAccountDtoPagedResponse;
/**
 * @description OK
 */
export type GetV2TeamBankAccountsBankaccountidQueryResponse =
    BankAccountDtoPagedResponse;
export type GetV2TeamBankAccountsBankaccountidQuery = {
    Response: GetV2TeamBankAccountsBankaccountidQueryResponse;
    PathParams: GetV2TeamBankAccountsBankaccountidPathParams;
};
