import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantsIdWithdrawalPoliciesMutationRequest,
    PostV2AdminMerchantsIdWithdrawalPoliciesMutationResponse,
    PostV2AdminMerchantsIdWithdrawalPoliciesPathParams,
} from "../../types/administrationEndpoints/PostV2AdminMerchantsIdWithdrawalPolicies";

/**
 * @link /v2/admin/merchants/:id/withdrawal-policies
 */
export async function postV2AdminMerchantsIdWithdrawalPolicies(
    id: PostV2AdminMerchantsIdWithdrawalPoliciesPathParams["id"],
    data?: PostV2AdminMerchantsIdWithdrawalPoliciesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminMerchantsIdWithdrawalPoliciesMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminMerchantsIdWithdrawalPoliciesMutationResponse,
        PostV2AdminMerchantsIdWithdrawalPoliciesMutationRequest
    >({
        method: "post",
        url: `/v2/admin/merchants/${id}/withdrawal-policies`,
        data,
        ...options,
    });
    return res.data;
}
