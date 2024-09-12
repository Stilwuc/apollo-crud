import type { PaymentProviderAssociationResultElementPagedResponseWithTotalCount } from "../PaymentProviderAssociationResultElementPagedResponseWithTotalCount";

export type GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPathParams =
    {
        /**
         * @type integer, int64
         */
        trafficCascadeId: number;
    };
export type GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersQueryParams =
    {
        /**
         * @type integer | undefined, int32
         */
        pageNumber?: number;
        /**
         * @type integer | undefined, int32
         */
        pageSize?: number;
    };
/**
 * @description OK
 */
export type GetV2AdminTrafficCascadesTrafficcascadeidPaymentProviders200 =
    PaymentProviderAssociationResultElementPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersQueryResponse =
    PaymentProviderAssociationResultElementPagedResponseWithTotalCount;
export type GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersQuery = {
    Response: GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersQueryResponse;
    PathParams: GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPathParams;
    QueryParams: GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersQueryParams;
};
