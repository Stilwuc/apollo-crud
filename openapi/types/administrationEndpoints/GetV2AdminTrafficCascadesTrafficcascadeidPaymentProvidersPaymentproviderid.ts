import type { PaymentProviderAssociationResultElement } from "../PaymentProviderAssociationResultElement";

export type GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams =
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
export type GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentproviderid200 =
    PaymentProviderAssociationResultElement;
/**
 * @description OK
 */
export type GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridQueryResponse =
    PaymentProviderAssociationResultElement;
export type GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridQuery =
    {
        Response: GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridQueryResponse;
        PathParams: GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams;
    };
