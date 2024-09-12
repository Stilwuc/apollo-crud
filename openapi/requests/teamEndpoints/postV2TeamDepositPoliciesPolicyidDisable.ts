import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamDepositPoliciesPolicyidDisableMutationResponse,
    PostV2TeamDepositPoliciesPolicyidDisablePathParams,
} from "../../types/teamEndpoints/PostV2TeamDepositPoliciesPolicyidDisable";

/**
 * @link /v2/team/deposit-policies/:policyId/disable
 */
export async function postV2TeamDepositPoliciesPolicyidDisable(
    policyId: PostV2TeamDepositPoliciesPolicyidDisablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamDepositPoliciesPolicyidDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamDepositPoliciesPolicyidDisableMutationResponse>({
            method: "post",
            url: `/v2/team/deposit-policies/${policyId}/disable`,
            ...options,
        });
    return res.data;
}
