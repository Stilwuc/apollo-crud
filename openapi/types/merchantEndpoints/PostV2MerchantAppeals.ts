import type { CreateAppellationResponse } from "../CreateAppellationResponse";
import type { CreateAppellationRequest } from "../CreateAppellationRequest";

/**
 * @description OK
 */
export type PostV2MerchantAppeals200 = CreateAppellationResponse;
export type PostV2MerchantAppealsMutationRequest = CreateAppellationRequest;
/**
 * @description OK
 */
export type PostV2MerchantAppealsMutationResponse = CreateAppellationResponse;
export type PostV2MerchantAppealsMutation = {
    Response: PostV2MerchantAppealsMutationResponse;
    Request: PostV2MerchantAppealsMutationRequest;
};
