import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationResponse,
    DeleteV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentproviderid";

/**
 * @link /v2/admin/traffic-cascades/:trafficCascadeId/payment-providers/:paymentProviderId
 */
export async function deleteV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentproviderid(
    trafficCascadeId: DeleteV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams["trafficCascadeId"],
    paymentProviderId: DeleteV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams["paymentProviderId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridMutationResponse>(
            {
                method: "delete",
                url: `/v2/admin/traffic-cascades/${trafficCascadeId}/payment-providers/${paymentProviderId}`,
                ...options,
            }
        );
    return res.data;
}
