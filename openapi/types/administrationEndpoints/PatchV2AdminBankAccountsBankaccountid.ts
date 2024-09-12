import type { AdminUpdateBankAccountResponse } from "../AdminUpdateBankAccountResponse";
import type { AdminUpdateBankAccountRequest } from "../AdminUpdateBankAccountRequest";

export type PatchV2AdminBankAccountsBankaccountidPathParams = {
    /**
     * @type string, uuid
     */
    bankAccountId: string;
};
/**
 * @description OK
 */
export type PatchV2AdminBankAccountsBankaccountid200 =
    AdminUpdateBankAccountResponse;
export type PatchV2AdminBankAccountsBankaccountidMutationRequest =
    AdminUpdateBankAccountRequest;
/**
 * @description OK
 */
export type PatchV2AdminBankAccountsBankaccountidMutationResponse =
    AdminUpdateBankAccountResponse;
export type PatchV2AdminBankAccountsBankaccountidMutation = {
    Response: PatchV2AdminBankAccountsBankaccountidMutationResponse;
    Request: PatchV2AdminBankAccountsBankaccountidMutationRequest;
    PathParams: PatchV2AdminBankAccountsBankaccountidPathParams;
};
