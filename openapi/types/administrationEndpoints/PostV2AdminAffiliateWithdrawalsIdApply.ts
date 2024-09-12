import type { ApplyAffiliateWithdrawalRequest } from "../ApplyAffiliateWithdrawalRequest";

export type PostV2AdminAffiliateWithdrawalsIdApplyPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type PostV2AdminAffiliateWithdrawalsIdApply200 = unknown;
export type PostV2AdminAffiliateWithdrawalsIdApplyMutationRequest =
    ApplyAffiliateWithdrawalRequest;
export type PostV2AdminAffiliateWithdrawalsIdApplyMutationResponse = unknown;
export type PostV2AdminAffiliateWithdrawalsIdApplyMutation = {
    Response: PostV2AdminAffiliateWithdrawalsIdApplyMutationResponse;
    Request: PostV2AdminAffiliateWithdrawalsIdApplyMutationRequest;
    PathParams: PostV2AdminAffiliateWithdrawalsIdApplyPathParams;
};
