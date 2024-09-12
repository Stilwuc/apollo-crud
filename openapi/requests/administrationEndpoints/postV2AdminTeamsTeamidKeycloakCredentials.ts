import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsTeamidKeycloakCredentialsMutationResponse,
    PostV2AdminTeamsTeamidKeycloakCredentialsPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamsTeamidKeycloakCredentials";

/**
 * @link /v2/admin/teams/:teamId/keycloak-credentials
 */
export async function postV2AdminTeamsTeamidKeycloakCredentials(
    teamId: PostV2AdminTeamsTeamidKeycloakCredentialsPathParams["teamId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamsTeamidKeycloakCredentialsMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTeamsTeamidKeycloakCredentialsMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/teams/${teamId}/keycloak-credentials`,
                ...options,
            }
        );
    return res.data;
}
