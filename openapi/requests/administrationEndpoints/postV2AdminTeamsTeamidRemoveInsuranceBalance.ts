import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsTeamidRemoveInsuranceBalanceMutationRequest,
    PostV2AdminTeamsTeamidRemoveInsuranceBalanceMutationResponse,
    PostV2AdminTeamsTeamidRemoveInsuranceBalancePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamsTeamidRemoveInsuranceBalance";

/**
 * @link /v2/admin/teams/:teamId/remove-insurance-balance
 */
export async function postV2AdminTeamsTeamidRemoveInsuranceBalance(
    teamId: PostV2AdminTeamsTeamidRemoveInsuranceBalancePathParams["teamId"],
    data?: PostV2AdminTeamsTeamidRemoveInsuranceBalanceMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamsTeamidRemoveInsuranceBalanceMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminTeamsTeamidRemoveInsuranceBalanceMutationResponse,
        PostV2AdminTeamsTeamidRemoveInsuranceBalanceMutationRequest
    >({
        method: "post",
        url: `/v2/admin/teams/${teamId}/remove-insurance-balance`,
        data,
        ...options,
    });
    return res.data;
}
