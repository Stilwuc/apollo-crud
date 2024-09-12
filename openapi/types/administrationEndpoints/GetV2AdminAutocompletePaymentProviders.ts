import type { GetPaymentProviderAutocompleteResponse } from "../GetPaymentProviderAutocompleteResponse";

export type GetV2AdminAutocompletePaymentProvidersQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2AdminAutocompletePaymentProviders200 =
    GetPaymentProviderAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2AdminAutocompletePaymentProvidersQueryResponse =
    GetPaymentProviderAutocompleteResponse[];
export type GetV2AdminAutocompletePaymentProvidersQuery = {
    Response: GetV2AdminAutocompletePaymentProvidersQueryResponse;
    QueryParams: GetV2AdminAutocompletePaymentProvidersQueryParams;
};
