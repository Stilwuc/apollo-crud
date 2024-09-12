import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantsIdDepositPoliciesMutationRequest,
    PostV2AdminMerchantsIdDepositPoliciesMutationResponse,
    PostV2AdminMerchantsIdDepositPoliciesPathParams,
} from "../../types/administrationEndpoints/PostV2AdminMerchantsIdDepositPolicies";

/**
 * @link /v2/admin/merchants/:id/deposit-policies
 */
export async function postV2AdminMerchantsIdDepositPolicies(
    id: PostV2AdminMerchantsIdDepositPoliciesPathParams["id"],
    data?: PostV2AdminMerchantsIdDepositPoliciesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminMerchantsIdDepositPoliciesMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminMerchantsIdDepositPoliciesMutationResponse,
        PostV2AdminMerchantsIdDepositPoliciesMutationRequest
    >({
        method: "post",
        url: `/v2/admin/merchants/${id}/deposit-policies`,
        data,
        ...options,
    });
    return res.data;
}
