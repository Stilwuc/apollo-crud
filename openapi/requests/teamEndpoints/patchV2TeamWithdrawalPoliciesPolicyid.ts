import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2TeamWithdrawalPoliciesPolicyidMutationRequest,
    PatchV2TeamWithdrawalPoliciesPolicyidMutationResponse,
    PatchV2TeamWithdrawalPoliciesPolicyidPathParams,
} from "../../types/teamEndpoints/PatchV2TeamWithdrawalPoliciesPolicyid";

/**
 * @link /v2/team/withdrawal-policies/:policyId
 */
export async function patchV2TeamWithdrawalPoliciesPolicyid(
    policyId: PatchV2TeamWithdrawalPoliciesPolicyidPathParams["policyId"],
    data?: PatchV2TeamWithdrawalPoliciesPolicyidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2TeamWithdrawalPoliciesPolicyidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2TeamWithdrawalPoliciesPolicyidMutationResponse,
        PatchV2TeamWithdrawalPoliciesPolicyidMutationRequest
    >({
        method: "patch",
        url: `/v2/team/withdrawal-policies/${policyId}`,
        data,
        ...options,
    });
    return res.data;
}
