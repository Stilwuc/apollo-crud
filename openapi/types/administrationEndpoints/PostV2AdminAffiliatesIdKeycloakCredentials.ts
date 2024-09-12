import type { PlatformCredentials } from "../PlatformCredentials";

export type PostV2AdminAffiliatesIdKeycloakCredentialsPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type PostV2AdminAffiliatesIdKeycloakCredentials200 = PlatformCredentials;
/**
 * @description OK
 */
export type PostV2AdminAffiliatesIdKeycloakCredentialsMutationResponse =
    PlatformCredentials;
export type PostV2AdminAffiliatesIdKeycloakCredentialsMutation = {
    Response: PostV2AdminAffiliatesIdKeycloakCredentialsMutationResponse;
    PathParams: PostV2AdminAffiliatesIdKeycloakCredentialsPathParams;
};
