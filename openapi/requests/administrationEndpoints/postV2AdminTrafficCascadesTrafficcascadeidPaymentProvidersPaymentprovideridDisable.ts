import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridDisableMutationResponse,
    PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridDisable";

/**
 * @link /v2/admin/traffic-cascades/:trafficCascadeId/payment-providers/:paymentProviderId/disable
 */
export async function postV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridDisable(
    trafficCascadeId: PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridDisablePathParams["trafficCascadeId"],
    paymentProviderId: PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridDisablePathParams["paymentProviderId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridDisableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/traffic-cascades/${trafficCascadeId}/payment-providers/${paymentProviderId}/disable`,
                ...options,
            }
        );
    return res.data;
}
