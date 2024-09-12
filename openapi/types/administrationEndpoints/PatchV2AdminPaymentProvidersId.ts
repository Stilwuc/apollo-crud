import type { UpdatePaymentProviderResult } from "../UpdatePaymentProviderResult";
import type { UpdatePaymentProviderRequest } from "../UpdatePaymentProviderRequest";

export type PatchV2AdminPaymentProvidersIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type PatchV2AdminPaymentProvidersId200 = UpdatePaymentProviderResult;
export type PatchV2AdminPaymentProvidersIdMutationRequest =
    UpdatePaymentProviderRequest;
/**
 * @description OK
 */
export type PatchV2AdminPaymentProvidersIdMutationResponse =
    UpdatePaymentProviderResult;
export type PatchV2AdminPaymentProvidersIdMutation = {
    Response: PatchV2AdminPaymentProvidersIdMutationResponse;
    Request: PatchV2AdminPaymentProvidersIdMutationRequest;
    PathParams: PatchV2AdminPaymentProvidersIdPathParams;
};
