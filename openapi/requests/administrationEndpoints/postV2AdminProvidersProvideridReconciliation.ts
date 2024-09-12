import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminProvidersProvideridReconciliationMutationRequest,
    PostV2AdminProvidersProvideridReconciliationMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminProvidersProvideridReconciliation";

/**
 * @link /v2/admin/providers/:providerId/reconciliation
 */
export async function postV2AdminProvidersProvideridReconciliation(
    data?: PostV2AdminProvidersProvideridReconciliationMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminProvidersProvideridReconciliationMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminProvidersProvideridReconciliationMutationResponse,
        PostV2AdminProvidersProvideridReconciliationMutationRequest
    >({
        method: "post",
        url: `/v2/admin/providers/${providerId}/reconciliation`,
        data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            ...options.headers,
        },
        ...options,
    });
    return res.data;
}
