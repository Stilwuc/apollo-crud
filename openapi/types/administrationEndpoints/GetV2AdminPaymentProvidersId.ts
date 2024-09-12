import type { PaymentProviderInfo } from "../PaymentProviderInfo";

export type GetV2AdminPaymentProvidersIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminPaymentProvidersId200 = PaymentProviderInfo;
/**
 * @description OK
 */
export type GetV2AdminPaymentProvidersIdQueryResponse = PaymentProviderInfo;
export type GetV2AdminPaymentProvidersIdQuery = {
    Response: GetV2AdminPaymentProvidersIdQueryResponse;
    PathParams: GetV2AdminPaymentProvidersIdPathParams;
};
