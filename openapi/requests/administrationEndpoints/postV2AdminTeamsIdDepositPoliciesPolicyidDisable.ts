import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsIdDepositPoliciesPolicyidDisableMutationResponse,
    PostV2AdminTeamsIdDepositPoliciesPolicyidDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamsIdDepositPoliciesPolicyidDisable";

/**
 * @link /v2/admin/teams/:id/deposit-policies/:policyId/disable
 */
export async function postV2AdminTeamsIdDepositPoliciesPolicyidDisable(
    id: PostV2AdminTeamsIdDepositPoliciesPolicyidDisablePathParams["id"],
    policyId: PostV2AdminTeamsIdDepositPoliciesPolicyidDisablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamsIdDepositPoliciesPolicyidDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTeamsIdDepositPoliciesPolicyidDisableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/teams/${id}/deposit-policies/${policyId}/disable`,
                ...options,
            }
        );
    return res.data;
}
