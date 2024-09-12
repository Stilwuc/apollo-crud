import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminTeamsTeamidMutationResponse,
    DeleteV2AdminTeamsTeamidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminTeamsTeamid";

/**
 * @link /v2/admin/teams/:teamId
 */
export async function deleteV2AdminTeamsTeamid(
    teamId: DeleteV2AdminTeamsTeamidPathParams["teamId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<DeleteV2AdminTeamsTeamidMutationResponse>["data"]> {
    const res = await client<DeleteV2AdminTeamsTeamidMutationResponse>({
        method: "delete",
        url: `/v2/admin/teams/${teamId}`,
        ...options,
    });
    return res.data;
}
