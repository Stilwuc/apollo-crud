import type { PatchMerchantRequest } from "../PatchMerchantRequest";

export type PatchV2AdminMerchantsIdPathParams = {
    /**
     * @type string, uuid
     */
    id: string;
};
/**
 * @description OK
 */
export type PatchV2AdminMerchantsId200 = unknown;
export type PatchV2AdminMerchantsIdMutationRequest = PatchMerchantRequest;
export type PatchV2AdminMerchantsIdMutationResponse = unknown;
export type PatchV2AdminMerchantsIdMutation = {
    Response: PatchV2AdminMerchantsIdMutationResponse;
    Request: PatchV2AdminMerchantsIdMutationRequest;
    PathParams: PatchV2AdminMerchantsIdPathParams;
};
