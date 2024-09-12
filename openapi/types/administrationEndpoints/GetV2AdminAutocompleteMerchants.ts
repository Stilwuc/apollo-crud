import type { GetMerchantAutocompleteResponse } from "../GetMerchantAutocompleteResponse";

export type GetV2AdminAutocompleteMerchantsQueryParams = {
    /**
     * @type string
     */
    q: string;
};
/**
 * @description OK
 */
export type GetV2AdminAutocompleteMerchants200 =
    GetMerchantAutocompleteResponse[];
/**
 * @description OK
 */
export type GetV2AdminAutocompleteMerchantsQueryResponse =
    GetMerchantAutocompleteResponse[];
export type GetV2AdminAutocompleteMerchantsQuery = {
    Response: GetV2AdminAutocompleteMerchantsQueryResponse;
    QueryParams: GetV2AdminAutocompleteMerchantsQueryParams;
};
