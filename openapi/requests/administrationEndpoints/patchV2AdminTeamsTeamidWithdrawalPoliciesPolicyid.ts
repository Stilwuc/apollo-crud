import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationRequest,
    PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationResponse,
    PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyid";

/**
 * @link /v2/admin/teams/:teamId/withdrawal-policies/:policyId
 */
export async function patchV2AdminTeamsTeamidWithdrawalPoliciesPolicyid(
    teamId: PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams["teamId"],
    policyId: PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidPathParams["policyId"],
    data?: PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationResponse,
        PatchV2AdminTeamsTeamidWithdrawalPoliciesPolicyidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/teams/${teamId}/withdrawal-policies/${policyId}`,
        data,
        ...options,
    });
    return res.data;
}
