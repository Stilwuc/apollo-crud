import type { CreatePaymentProviderResult } from "../CreatePaymentProviderResult";
import type { CreatePaymentProviderRequest } from "../CreatePaymentProviderRequest";

/**
 * @description OK
 */
export type PostV2AdminPaymentProviders200 = CreatePaymentProviderResult;
export type PostV2AdminPaymentProvidersMutationRequest =
    CreatePaymentProviderRequest;
/**
 * @description OK
 */
export type PostV2AdminPaymentProvidersMutationResponse =
    CreatePaymentProviderResult;
export type PostV2AdminPaymentProvidersMutation = {
    Response: PostV2AdminPaymentProvidersMutationResponse;
    Request: PostV2AdminPaymentProvidersMutationRequest;
};
