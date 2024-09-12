import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamWithdrawalPoliciesPolicyidEnableMutationResponse,
    PostV2TeamWithdrawalPoliciesPolicyidEnablePathParams,
} from "../../types/teamEndpoints/PostV2TeamWithdrawalPoliciesPolicyidEnable";

/**
 * @link /v2/team/withdrawal-policies/:policyId/enable
 */
export async function postV2TeamWithdrawalPoliciesPolicyidEnable(
    policyId: PostV2TeamWithdrawalPoliciesPolicyidEnablePathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamWithdrawalPoliciesPolicyidEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamWithdrawalPoliciesPolicyidEnableMutationResponse>(
            {
                method: "post",
                url: `/v2/team/withdrawal-policies/${policyId}/enable`,
                ...options,
            }
        );
    return res.data;
}
