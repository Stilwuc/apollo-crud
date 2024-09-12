import type { WithdrawalHashRequest } from "../WithdrawalHashRequest";

export type PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptPathParams =
    {
        /**
         * @type string, uuid
         */
        merchantId: string;
        /**
         * @type integer, int64
         */
        withdrawalId: number;
    };
/**
 * @description OK
 */
export type PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAccept200 =
    unknown;
export type PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptMutationRequest =
    WithdrawalHashRequest;
export type PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptMutationResponse =
    unknown;
export type PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptMutation =
    {
        Response: PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptMutationResponse;
        Request: PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptMutationRequest;
        PathParams: PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptPathParams;
    };
