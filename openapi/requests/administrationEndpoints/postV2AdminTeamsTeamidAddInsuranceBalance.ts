import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsTeamidAddInsuranceBalanceMutationRequest,
    PostV2AdminTeamsTeamidAddInsuranceBalanceMutationResponse,
    PostV2AdminTeamsTeamidAddInsuranceBalancePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamsTeamidAddInsuranceBalance";

/**
 * @link /v2/admin/teams/:teamId/add-insurance-balance
 */
export async function postV2AdminTeamsTeamidAddInsuranceBalance(
    teamId: PostV2AdminTeamsTeamidAddInsuranceBalancePathParams["teamId"],
    data?: PostV2AdminTeamsTeamidAddInsuranceBalanceMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamsTeamidAddInsuranceBalanceMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminTeamsTeamidAddInsuranceBalanceMutationResponse,
        PostV2AdminTeamsTeamidAddInsuranceBalanceMutationRequest
    >({
        method: "post",
        url: `/v2/admin/teams/${teamId}/add-insurance-balance`,
        data,
        ...options,
    });
    return res.data;
}
