import type { PaymentProviderAssociationResultElement } from "../PaymentProviderAssociationResultElement";
import type { CreatePaymentProviderAssociationRequest } from "../CreatePaymentProviderAssociationRequest";

export type PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPathParams =
    {
        /**
         * @type integer, int64
         */
        trafficCascadeId: number;
    };
/**
 * @description OK
 */
export type PostV2AdminTrafficCascadesTrafficcascadeidPaymentProviders200 =
    PaymentProviderAssociationResultElement;
export type PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersMutationRequest =
    CreatePaymentProviderAssociationRequest;
/**
 * @description OK
 */
export type PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersMutationResponse =
    PaymentProviderAssociationResultElement;
export type PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersMutation =
    {
        Response: PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersMutationResponse;
        Request: PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersMutationRequest;
        PathParams: PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPathParams;
    };
