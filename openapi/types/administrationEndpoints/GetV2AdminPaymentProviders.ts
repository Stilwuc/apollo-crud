import type { PaymentProviderShortResultPagedResponseWithTotalCount } from "../PaymentProviderShortResultPagedResponseWithTotalCount";

export type GetV2AdminPaymentProvidersQueryParams = {
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
export type GetV2AdminPaymentProviders200 =
    PaymentProviderShortResultPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminPaymentProvidersQueryResponse =
    PaymentProviderShortResultPagedResponseWithTotalCount;
export type GetV2AdminPaymentProvidersQuery = {
    Response: GetV2AdminPaymentProvidersQueryResponse;
    QueryParams: GetV2AdminPaymentProvidersQueryParams;
};
