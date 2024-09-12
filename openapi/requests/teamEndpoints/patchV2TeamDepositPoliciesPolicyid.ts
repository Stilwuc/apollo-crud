import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2TeamDepositPoliciesPolicyidMutationRequest,
    PatchV2TeamDepositPoliciesPolicyidMutationResponse,
    PatchV2TeamDepositPoliciesPolicyidPathParams,
} from "../../types/teamEndpoints/PatchV2TeamDepositPoliciesPolicyid";

/**
 * @link /v2/team/deposit-policies/:policyId
 */
export async function patchV2TeamDepositPoliciesPolicyid(
    policyId: PatchV2TeamDepositPoliciesPolicyidPathParams["policyId"],
    data?: PatchV2TeamDepositPoliciesPolicyidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2TeamDepositPoliciesPolicyidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2TeamDepositPoliciesPolicyidMutationResponse,
        PatchV2TeamDepositPoliciesPolicyidMutationRequest
    >({
        method: "patch",
        url: `/v2/team/deposit-policies/${policyId}`,
        data,
        ...options,
    });
    return res.data;
}
