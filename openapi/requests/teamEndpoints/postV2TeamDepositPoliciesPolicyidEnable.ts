import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamDepositPoliciesPolicyidEnableMutationResponse,
    PostV2TeamDepositPoliciesPolicyidEnablePathParams,
} from "../../types/teamEndpoints/PostV2TeamDepositPoliciesPolicyidEnable";

/**
 * @link /v2/team/deposit-policies/:policyId/enable
 */
export async function postV2TeamDepositPoliciesPolicyidEnable(
    policyId: PostV2TeamDepositPoliciesPolicyidEnablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamDepositPoliciesPolicyidEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamDepositPoliciesPolicyidEnableMutationResponse>({
            method: "post",
            url: `/v2/team/deposit-policies/${policyId}/enable`,
            ...options,
        });
    return res.data;
}
