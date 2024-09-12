import type { CreateMerchantDepositResponseDto } from "../CreateMerchantDepositResponseDto";
import type { CreateMerchantDepositRequest } from "../CreateMerchantDepositRequest";

/**
 * @description OK
 */
export type PostV2MerchantBalanceDeposits200 = CreateMerchantDepositResponseDto;
export type PostV2MerchantBalanceDepositsMutationRequest =
    CreateMerchantDepositRequest;
/**
 * @description OK
 */
export type PostV2MerchantBalanceDepositsMutationResponse =
    CreateMerchantDepositResponseDto;
export type PostV2MerchantBalanceDepositsMutation = {
    Response: PostV2MerchantBalanceDepositsMutationResponse;
    Request: PostV2MerchantBalanceDepositsMutationRequest;
};
