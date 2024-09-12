import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantsIdKeycloakCredentialsMutationResponse,
    PostV2AdminMerchantsIdKeycloakCredentialsPathParams,
} from "../../types/administrationEndpoints/PostV2AdminMerchantsIdKeycloakCredentials";

/**
 * @link /v2/admin/merchants/:id/keycloak-credentials
 */
export async function postV2AdminMerchantsIdKeycloakCredentials(
    id: PostV2AdminMerchantsIdKeycloakCredentialsPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminMerchantsIdKeycloakCredentialsMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminMerchantsIdKeycloakCredentialsMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/merchants/${id}/keycloak-credentials`,
                ...options,
            }
        );
    return res.data;
}
