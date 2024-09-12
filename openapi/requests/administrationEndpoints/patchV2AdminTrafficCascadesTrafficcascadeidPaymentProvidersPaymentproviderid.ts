import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationRequest,
    PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationResponse,
    PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentproviderid";

/**
 * @link /v2/admin/traffic-cascades/:trafficCascadeId/payment-providers/:paymentProviderId
 */
export async function patchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentproviderid(
    trafficCascadeId: PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams["trafficCascadeId"],
    paymentProviderId: PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams["paymentProviderId"],
    data?: PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationResponse,
        PatchV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/traffic-cascades/${trafficCascadeId}/payment-providers/${paymentProviderId}`,
        data,
        ...options,
    });
    return res.data;
}
