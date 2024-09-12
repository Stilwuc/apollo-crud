import type { WithdrawalHashRequest } from "../WithdrawalHashRequest";

export type PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptPathParams =
    {
        /**
         * @type integer, int64
         */
        affiliateId: number;
        /**
         * @type integer, int64
         */
        withdrawalId: number;
    };
/**
 * @description OK
 */
export type PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAccept200 =
    unknown;
export type PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptMutationRequest =
    WithdrawalHashRequest;
export type PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptMutationResponse =
    unknown;
export type PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptMutation =
    {
        Response: PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptMutationResponse;
        Request: PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptMutationRequest;
        PathParams: PostV2SupportAffiliatesAffiliateidWithdrawalsWithdrawalidAcceptPathParams;
    };
