import type { UpdateBankAccountResponse } from "../UpdateBankAccountResponse";
import type { UpdateBankAccountRequest } from "../UpdateBankAccountRequest";

export type PatchV2TeamBankAccountsBankaccountidPathParams = {
    /**
     * @type string, uuid
     */
    bankAccountId: string;
};
/**
 * @description OK
 */
export type PatchV2TeamBankAccountsBankaccountid200 = UpdateBankAccountResponse;
export type PatchV2TeamBankAccountsBankaccountidMutationRequest =
    UpdateBankAccountRequest;
/**
 * @description OK
 */
export type PatchV2TeamBankAccountsBankaccountidMutationResponse =
    UpdateBankAccountResponse;
export type PatchV2TeamBankAccountsBankaccountidMutation = {
    Response: PatchV2TeamBankAccountsBankaccountidMutationResponse;
    Request: PatchV2TeamBankAccountsBankaccountidMutationRequest;
    PathParams: PatchV2TeamBankAccountsBankaccountidPathParams;
};
