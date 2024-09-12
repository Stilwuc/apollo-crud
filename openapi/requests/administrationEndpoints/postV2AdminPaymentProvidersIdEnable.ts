import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminPaymentProvidersIdEnableMutationResponse,
    PostV2AdminPaymentProvidersIdEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminPaymentProvidersIdEnable";

/**
 * @link /v2/admin/payment-providers/:id/enable
 */
export async function postV2AdminPaymentProvidersIdEnable(
    id: PostV2AdminPaymentProvidersIdEnablePathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminPaymentProvidersIdEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminPaymentProvidersIdEnableMutationResponse>({
            method: "post",
            url: `/v2/admin/payment-providers/${id}/enable`,
            ...options,
        });
    return res.data;
}
