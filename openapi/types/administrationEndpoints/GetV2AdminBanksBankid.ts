import type { BankWithCurrencyDto } from "../BankWithCurrencyDto";

export type GetV2AdminBanksBankidPathParams = {
    /**
     * @type integer, int64
     */
    bankId: number;
};
/**
 * @description OK
 */
export type GetV2AdminBanksBankid200 = BankWithCurrencyDto;
/**
 * @description OK
 */
export type GetV2AdminBanksBankidQueryResponse = BankWithCurrencyDto;
export type GetV2AdminBanksBankidQuery = {
    Response: GetV2AdminBanksBankidQueryResponse;
    PathParams: GetV2AdminBanksBankidPathParams;
};
