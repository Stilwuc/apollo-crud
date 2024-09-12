import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamsIdDepositPoliciesPolicyidQueryResponse,
    GetV2AdminTeamsIdDepositPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamsIdDepositPoliciesPolicyid";

/**
 * @link /v2/admin/teams/:id/deposit-policies/:policyId
 */
export async function getV2AdminTeamsIdDepositPoliciesPolicyid(
    id: GetV2AdminTeamsIdDepositPoliciesPolicyidPathParams["id"],
    policyId: GetV2AdminTeamsIdDepositPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTeamsIdDepositPoliciesPolicyidQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminTeamsIdDepositPoliciesPolicyidQueryResponse>({
            method: "get",
            url: `/v2/admin/teams/${id}/deposit-policies/${policyId}`,
            ...options,
        });
    return res.data;
}
