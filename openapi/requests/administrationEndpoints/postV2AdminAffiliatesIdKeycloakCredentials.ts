import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminAffiliatesIdKeycloakCredentialsMutationResponse,
    PostV2AdminAffiliatesIdKeycloakCredentialsPathParams,
} from "../../types/administrationEndpoints/PostV2AdminAffiliatesIdKeycloakCredentials";

/**
 * @link /v2/admin/affiliates/:id/keycloak-credentials
 */
export async function postV2AdminAffiliatesIdKeycloakCredentials(
    id: PostV2AdminAffiliatesIdKeycloakCredentialsPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminAffiliatesIdKeycloakCredentialsMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminAffiliatesIdKeycloakCredentialsMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/affiliates/${id}/keycloak-credentials`,
                ...options,
            }
        );
    return res.data;
}
