import type { PaymentProviderAssociationResultElement } from "../PaymentProviderAssociationResultElement";
import type { UpdatePaymentProviderAssociationRequest } from "../UpdatePaymentProviderAssociationRequest";

export type PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams =
    {
        /**
         * @type integer, int64
         */
        trafficCascadeId: number;
        /**
         * @type integer, int64
         */
        paymentProviderId: number;
    };
/**
 * @description OK
 */
export type PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentproviderid200 =
    PaymentProviderAssociationResultElement;
export type PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationRequest =
    UpdatePaymentProviderAssociationRequest;
/**
 * @description OK
 */
export type PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationResponse =
    PaymentProviderAssociationResultElement;
export type PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutation =
    {
        Response: PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationResponse;
        Request: PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationRequest;
        PathParams: PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams;
    };
