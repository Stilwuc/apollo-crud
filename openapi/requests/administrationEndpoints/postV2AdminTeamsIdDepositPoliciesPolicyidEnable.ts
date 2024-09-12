import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsIdDepositPoliciesPolicyidEnableMutationResponse,
    PostV2AdminTeamsIdDepositPoliciesPolicyidEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamsIdDepositPoliciesPolicyidEnable";

/**
 * @link /v2/admin/teams/:id/deposit-policies/:policyId/enable
 */
export async function postV2AdminTeamsIdDepositPoliciesPolicyidEnable(
    id: PostV2AdminTeamsIdDepositPoliciesPolicyidEnablePathParams["id"],
    policyId: PostV2AdminTeamsIdDepositPoliciesPolicyidEnablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamsIdDepositPoliciesPolicyidEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTeamsIdDepositPoliciesPolicyidEnableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/teams/${id}/deposit-policies/${policyId}/enable`,
                ...options,
            }
        );
    return res.data;
}
