import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminPaymentProvidersMutationRequest,
    PostV2AdminPaymentProvidersMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminPaymentProviders";

/**
 * @link /v2/admin/payment-providers
 */
export async function postV2AdminPaymentProviders(
    data?: PostV2AdminPaymentProvidersMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminPaymentProvidersMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminPaymentProvidersMutationResponse,
        PostV2AdminPaymentProvidersMutationRequest
    >({ method: "post", url: `/v2/admin/payment-providers`, data, ...options });
    return res.data;
}
