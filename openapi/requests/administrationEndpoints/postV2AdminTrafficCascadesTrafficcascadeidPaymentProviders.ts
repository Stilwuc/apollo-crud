import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersMutationRequest,
    PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersMutationResponse,
    PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTrafficCascadesTrafficcascadeidPaymentProviders";

/**
 * @link /v2/admin/traffic-cascades/:trafficCascadeId/payment-providers
 */
export async function postV2AdminTrafficCascadesTrafficcascadeidPaymentProviders(
    trafficCascadeId: PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPathParams["trafficCascadeId"],
    data?: PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersMutationResponse,
        PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersMutationRequest
    >({
        method: "post",
        url: `/v2/admin/traffic-cascades/${trafficCascadeId}/payment-providers`,
        data,
        ...options,
    });
    return res.data;
}
