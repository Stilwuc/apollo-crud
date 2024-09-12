import type { AdminUpdateBankResponse } from "../AdminUpdateBankResponse";
import type { AdminUpdateBankRequest } from "../AdminUpdateBankRequest";

export type PatchV2AdminBanksBankidPathParams = {
    /**
     * @type integer, int64
     */
    bankId: number;
};
/**
 * @description OK
 */
export type PatchV2AdminBanksBankid200 = AdminUpdateBankResponse;
export type PatchV2AdminBanksBankidMutationRequest = AdminUpdateBankRequest;
/**
 * @description OK
 */
export type PatchV2AdminBanksBankidMutationResponse = AdminUpdateBankResponse;
export type PatchV2AdminBanksBankidMutation = {
    Response: PatchV2AdminBanksBankidMutationResponse;
    Request: PatchV2AdminBanksBankidMutationRequest;
    PathParams: PatchV2AdminBanksBankidPathParams;
};
