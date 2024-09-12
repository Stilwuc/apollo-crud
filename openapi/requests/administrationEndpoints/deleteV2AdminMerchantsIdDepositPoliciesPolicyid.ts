import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminMerchantsIdDepositPoliciesPolicyidMutationResponse,
    DeleteV2AdminMerchantsIdDepositPoliciesPolicyidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminMerchantsIdDepositPoliciesPolicyid";

/**
 * @link /v2/admin/merchants/:id/deposit-policies/:policyId
 */
export async function deleteV2AdminMerchantsIdDepositPoliciesPolicyid(
    id: DeleteV2AdminMerchantsIdDepositPoliciesPolicyidPathParams["id"],
    policyId: DeleteV2AdminMerchantsIdDepositPoliciesPolicyidPathParams["policyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminMerchantsIdDepositPoliciesPolicyidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminMerchantsIdDepositPoliciesPolicyidMutationResponse>(
            {
                method: "delete",
                url: `/v2/admin/merchants/${id}/deposit-policies/${policyId}`,
                ...options,
            }
        );
    return res.data;
}
