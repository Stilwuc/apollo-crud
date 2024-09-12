import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsMutationRequest,
    PostV2AdminTeamsMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminTeams";

/**
 * @link /v2/admin/teams
 */
export async function postV2AdminTeams(
    data?: PostV2AdminTeamsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminTeamsMutationResponse>["data"]> {
    const res = await client<
        PostV2AdminTeamsMutationResponse,
        PostV2AdminTeamsMutationRequest
    >({ method: "post", url: `/v2/admin/teams`, data, ...options });
    return res.data;
}
