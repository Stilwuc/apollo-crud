import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminPaymentProvidersIdDisableMutationResponse,
    PostV2AdminPaymentProvidersIdDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminPaymentProvidersIdDisable";

/**
 * @link /v2/admin/payment-providers/:id/disable
 */
export async function postV2AdminPaymentProvidersIdDisable(
    id: PostV2AdminPaymentProvidersIdDisablePathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminPaymentProvidersIdDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminPaymentProvidersIdDisableMutationResponse>({
            method: "post",
            url: `/v2/admin/payment-providers/${id}/disable`,
            ...options,
        });
    return res.data;
}
