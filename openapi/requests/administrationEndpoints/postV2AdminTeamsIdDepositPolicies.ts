import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamsIdDepositPoliciesMutationRequest,
    PostV2AdminTeamsIdDepositPoliciesMutationResponse,
    PostV2AdminTeamsIdDepositPoliciesPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTeamsIdDepositPolicies";

/**
 * @link /v2/admin/teams/:id/deposit-policies
 */
export async function postV2AdminTeamsIdDepositPolicies(
    id: PostV2AdminTeamsIdDepositPoliciesPathParams["id"],
    data?: PostV2AdminTeamsIdDepositPoliciesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTeamsIdDepositPoliciesMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminTeamsIdDepositPoliciesMutationResponse,
        PostV2AdminTeamsIdDepositPoliciesMutationRequest
    >({
        method: "post",
        url: `/v2/admin/teams/${id}/deposit-policies`,
        data,
        ...options,
    });
    return res.data;
}
