import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridEnableMutationResponse,
    PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridEnable";

/**
 * @link /v2/admin/traffic-cascades/:trafficCascadeId/payment-providers/:paymentProviderId/enable
 */
export async function postV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridEnable(
    trafficCascadeId: PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridEnablePathParams["trafficCascadeId"],
    paymentProviderId: PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridEnablePathParams["paymentProviderId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridEnableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/traffic-cascades/${trafficCascadeId}/payment-providers/${paymentProviderId}/enable`,
                ...options,
            }
        );
    return res.data;
}
