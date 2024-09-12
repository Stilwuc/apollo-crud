import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationResponse,
    DeleteV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminTeamsTeamidWithdrawalPoliciesPolicyid";

/**
 * @link /v2/admin/teams/:teamId/withdrawal-policies/:policyId
 */
export async function deleteV2AdminTeamsTeamidWithdrawalPoliciesPolicyid(
    teamId: DeleteV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams["teamId"],
    policyId: DeleteV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationResponse>(
            {
                method: "delete",
                url: `/v2/admin/teams/${teamId}/withdrawal-policies/${policyId}`,
                ...options,
            }
        );
    return res.data;
}
