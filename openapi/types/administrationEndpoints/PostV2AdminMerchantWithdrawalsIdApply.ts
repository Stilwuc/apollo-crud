import type { ApplyMerchantWithdrawalRequest } from "../ApplyMerchantWithdrawalRequest";

export type PostV2AdminMerchantWithdrawalsIdApplyPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type PostV2AdminMerchantWithdrawalsIdApply200 = unknown;
export type PostV2AdminMerchantWithdrawalsIdApplyMutationRequest =
    ApplyMerchantWithdrawalRequest;
export type PostV2AdminMerchantWithdrawalsIdApplyMutationResponse = unknown;
export type PostV2AdminMerchantWithdrawalsIdApplyMutation = {
    Response: PostV2AdminMerchantWithdrawalsIdApplyMutationResponse;
    Request: PostV2AdminMerchantWithdrawalsIdApplyMutationRequest;
    PathParams: PostV2AdminMerchantWithdrawalsIdApplyPathParams;
};
