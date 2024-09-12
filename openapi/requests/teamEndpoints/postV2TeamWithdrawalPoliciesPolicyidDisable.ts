import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamWithdrawalPoliciesPolicyidDisableMutationResponse,
    PostV2TeamWithdrawalPoliciesPolicyidDisablePathParams,
} from "../../types/teamEndpoints/PostV2TeamWithdrawalPoliciesPolicyidDisable";

/**
 * @link /v2/team/withdrawal-policies/:policyId/disable
 */
export async function postV2TeamWithdrawalPoliciesPolicyidDisable(
    policyId: PostV2TeamWithdrawalPoliciesPolicyidDisablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamWithdrawalPoliciesPolicyidDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamWithdrawalPoliciesPolicyidDisableMutationResponse>(
            {
                method: "post",
                url: `/v2/team/withdrawal-policies/${policyId}/disable`,
                ...options,
            }
        );
    return res.data;
}
