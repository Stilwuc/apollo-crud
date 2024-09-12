import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminTeamsIdDepositPoliciesPolicyidMutationRequest,
    PatchV2AdminTeamsIdDepositPoliciesPolicyidMutationResponse,
    PatchV2AdminTeamsIdDepositPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminTeamsIdDepositPoliciesPolicyid";

/**
 * @link /v2/admin/teams/:id/deposit-policies/:policyId
 */
export async function patchV2AdminTeamsIdDepositPoliciesPolicyid(
    id: PatchV2AdminTeamsIdDepositPoliciesPolicyidPathParams["id"],
    policyId: PatchV2AdminTeamsIdDepositPoliciesPolicyidPathParams["policyId"],
    data?: PatchV2AdminTeamsIdDepositPoliciesPolicyidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminTeamsIdDepositPoliciesPolicyidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminTeamsIdDepositPoliciesPolicyidMutationResponse,
        PatchV2AdminTeamsIdDepositPoliciesPolicyidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/teams/${id}/deposit-policies/${policyId}`,
        data,
        ...options,
    });
    return res.data;
}
