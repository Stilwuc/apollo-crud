import type { PlatformCredentials } from "../PlatformCredentials";

export type PostV2AdminTeamsTeamidKeycloakCredentialsPathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
};
/**
 * @description OK
 */
export type PostV2AdminTeamsTeamidKeycloakCredentials200 = PlatformCredentials;
/**
 * @description OK
 */
export type PostV2AdminTeamsTeamidKeycloakCredentialsMutationResponse =
    PlatformCredentials;
export type PostV2AdminTeamsTeamidKeycloakCredentialsMutation = {
    Response: PostV2AdminTeamsTeamidKeycloakCredentialsMutationResponse;
    PathParams: PostV2AdminTeamsTeamidKeycloakCredentialsPathParams;
};
