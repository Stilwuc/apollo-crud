import type { MerchantCredentials } from "../MerchantCredentials";

export type PostV2AdminMerchantsIdKeycloakCredentialsPathParams = {
    /**
     * @type string, uuid
     */
    id: string;
};
/**
 * @description OK
 */
export type PostV2AdminMerchantsIdKeycloakCredentials200 = MerchantCredentials;
/**
 * @description OK
 */
export type PostV2AdminMerchantsIdKeycloakCredentialsMutationResponse =
    MerchantCredentials;
export type PostV2AdminMerchantsIdKeycloakCredentialsMutation = {
    Response: PostV2AdminMerchantsIdKeycloakCredentialsMutationResponse;
    PathParams: PostV2AdminMerchantsIdKeycloakCredentialsPathParams;
};
