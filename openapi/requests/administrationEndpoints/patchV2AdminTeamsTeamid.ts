import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminTeamsTeamidMutationRequest,
    PatchV2AdminTeamsTeamidMutationResponse,
    PatchV2AdminTeamsTeamidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminTeamsTeamid";

/**
 * @link /v2/admin/teams/:teamId
 */
export async function patchV2AdminTeamsTeamid(
    teamId: PatchV2AdminTeamsTeamidPathParams["teamId"],
    data?: PatchV2AdminTeamsTeamidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PatchV2AdminTeamsTeamidMutationResponse>["data"]> {
    const res = await client<
        PatchV2AdminTeamsTeamidMutationResponse,
        PatchV2AdminTeamsTeamidMutationRequest
    >({ method: "patch", url: `/v2/admin/teams/${teamId}`, data, ...options });
    return res.data;
}
