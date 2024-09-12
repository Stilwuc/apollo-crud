import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminTeamsIdDepositPoliciesPolicyidMutationResponse,
    DeleteV2AdminTeamsIdDepositPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminTeamsIdDepositPoliciesPolicyid";

/**
 * @link /v2/admin/teams/:id/deposit-policies/:policyId
 */
export async function deleteV2AdminTeamsIdDepositPoliciesPolicyid(
    id: DeleteV2AdminTeamsIdDepositPoliciesPolicyidPathParams["id"],
    policyId: DeleteV2AdminTeamsIdDepositPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminTeamsIdDepositPoliciesPolicyidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminTeamsIdDepositPoliciesPolicyidMutationResponse>(
            {
                method: "delete",
                url: `/v2/admin/teams/${id}/deposit-policies/${policyId}`,
                ...options,
            }
        );
    return res.data;
}
